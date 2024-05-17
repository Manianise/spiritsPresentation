import express from "express";
import pkg from 'vite-express';
import { access } from 'fs';
import { join } from 'path';
import { JSONPreset } from 'lowdb/node'
import {fileURLToPath} from 'url';
import { dirname } from 'path';


const app = express();
// pkg.config({ mode: "production" })
const { listen } = pkg;

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const db = await JSONPreset(__dirname + '/file/mails.json', { mails: [] })

const fileCheck = () => {

  return new Promise((resolve, reject) => 
  {
    access('./file/mails.json', error => error ?

    resolve(console.log('connection successful' )) :
    reject(console.log('connection unsuccessful ' + error)))
  })

} 

fileCheck()

.then(() => 
{
  listen(app, 5137, () =>
  console.log("Server is listening on port 5137...")
);

})

.then(() => 
{

app.use(express.urlencoded({ extended: true }));

app.post('/validate', function (req, res)
{


  res.sendFile(join(__dirname, 'build', 'index.html'));

  console.log('new mail entry ' + req.body.mail);

  const { mails } = db.data
  mails.push(req.body.mail)

  db.write()    
  
})

})
.catch((error) => console.error('An error has occured ' + error))

.finally(() => 
{
 console.log('operation closing');
})
