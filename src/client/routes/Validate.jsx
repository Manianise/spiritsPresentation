

export default function Validate() {

fetch('validate?mail=')
  .then(response => console.log(response))
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

    return <div className="container-fluid validate">
    <h1 className="alert alert-success m-5"> Bienvenue dans l'aventure ! Nous vous contacterons sous 48h ! A très bientôt !</h1>
    </div>

}