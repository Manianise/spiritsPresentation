import CanvasParticlesBg from "../canvas/CanvasParticleBg";
import Input from "../form/Input";
import PopUp from "../popup/PopUp";
import { useState, useRef, useEffect } from "react";

/**
 * 
 * @returns the static page of 4th slide. Is a simple contactPage but can be reused contrary to other slides
 */
export default function ContactPage() {

    const [fake_field, setFakeField] = useState('fine')
    const [input, setInput] = useState('')
    const [isValid, setIsvalid] = useState(true)
    const formRef = useRef(null)

    useEffect(() => {

        fake_field !== 'fine' && window.alert('Get caught dear robot !');
        (input !== '' && input.includes('@')) ? setIsvalid(false) : setIsvalid(true)

    },[input])


    return <>
            <PopUp
            y={20}
            w={50}
            h={70}
            content={<form className="row p-5"
                        id='cf'
                        name="contactForm"
                        target="_blank"
                        action="https://www.se-get.zebrart.fr"
                        method='post'
                        ref={formRef}
                        autoComplete="on">
                    <Input
                        type='email'
                        labelTitle="N'hesitez pas à nous notifier si vous êtes intéressés, nous vous contacterons dans les plus brefs delais"
                        htmlFor='mail-input'
                        placeholder='votremail@exemple.com'
                        className='mb-2 col-md-12'
                        name='mail'
                        id="mail-input"
                        onChange={setInput}
                        value={input} />
                    <Input 
                        type="hidden" 
                        name="c'm'ere_kitty" 
                        value={fake_field} 
                        onChange={setFakeField}/>
                    <button 
                        className="btn btn-success col-md-12 mb-2 mt-2" 
                        type="submit" 
                        disabled={isValid}>Envoyer</button>
                    <p> - 0 engagement - 0 publicité - 0 collecte de données -</p>
            </form>
            } />
            <CanvasParticlesBg nbr={15} />
    </> 
}