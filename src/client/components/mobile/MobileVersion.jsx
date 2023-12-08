import CanvasParticlesBg from "../canvas/CanvasParticleBg"
import PopUp from "../popup/PopUp"
import { MakePopUp } from "../popup/PopUp";
import { Zoom } from "react-awesome-reveal"
import logo from '../../assets/logox512.webp';
import MobileSection from "./MobileSection";
import CogWheel from "../svg/CogWheel";
import intro from '../../assets/video/intro.mp4'
import site_web_video_2 from '../../assets/video/site_web_video_2.mp4'
import site_web_video from '../../assets/video/site_web_video.mp4'
import laclef from '../../assets/clients/cblaclef.webp'
import leparnasse from '../../assets/clients/leparnasse.webp'
import zebrart from '../../assets/clients/zebrart.webp'
import { useState, useRef, useEffect } from "react";
import Input from "../form/Input";

/**
 * 
 * @returns mobile version. All components can be found in slider version for a clearer view
 */

export default function MobileVersion({size = 3000, nbrSections= 5}) {

    const build = size / nbrSections
    const canBeBuilt = Number.isInteger(build)


    // Handling form

    const [fake_field, setFakeField] = useState('fine')
    const [input, setInput] = useState('')
    const [isValid, setIsvalid] = useState(true)
    const formRef = useRef(null)


    useEffect(() => {

        fake_field !== 'fine' && window.alert('Click on that dear robot !');
        (input !== '' && input.includes('@')) ? setIsvalid(false) : setIsvalid(true)

    },[input])



return !canBeBuilt ? <div className="alert alert-danger"> nbrSections must be a multiplier of size </div> : 

<>
<CanvasParticlesBg className='mobile-bg' nbr={30} yStart={size} xStart={screen.availHeight} />

<section style={{height:`${size}px`, width:screen.availWidth}} className='mobile-version'>

        
    <MobileSection onCutNumber={build}>

            <Zoom className='middle-frame-zoom' cascade>

                <div className="small-frame" data-speed="8"></div>
                    <img src={logo} alt="logo" className="logo" width="250" height="250" data-speed="7"/>
                <div className="middle-frame" data-speed="6"></div>

            </Zoom>

        <PopUp 
            x={0} 
            y={50} 
            w={60}
            h={50}
            content='Spirits Entertainment'
            start={true}
            resH='px'
            fontSize={0.8} />

        <PopUp 
            y={size / 5 - 100} 
            w={80}
            h={50}
            content='Web - Design - Divertissement'
            resH='px'
            fontSize={0.8}
        />

    </MobileSection>

    <MobileSection onCutNumber={build}>

        <PopUp 
            x={0} 
            y={size / 5 + 50 } 
            w={60}
            h={50}
            content='Qui sommes-nous ?'
            start={true}
            resH='px'
            fontSize={0.8} />

        <MakePopUp
            y={size / 5 + 180}
            w={80}
            h={300}
            start={true}
            content="Spécialiste du design web et média, le développement d'applications et la mise en place d'outils permettant l'organisation et la création d'événements, Spirits entertainment vous offre ses services pour booster votre visibilité sur le web ainsi que recevoir des conseils et un accompagnement personnalisés pour préparer votre transition vers les dernières technologies"
            resH='px'
            fontSize={1}
            isActive={true} />

    </MobileSection>

    <MobileSection onCutNumber={build * 2}>

        <PopUp 
            x={0} 
            y={size / 5 * 2 + 50 } 
            w={60}
            h={50}
            content='Nos compétences'
            start={true}
            resH='px'
            fontSize={0.8} />

        <PopUp  
            y={size / 5 * 2 + 130 } 
            w={80}
            h={50}
            content='Montage vidéo - Webdesign - Image'
            start={true}
            resH='px'
            fontSize={0.8} />

        <PopUp  
            y={size / 5 * 3 - 150} 
            w={80}
            h={50}
            content='Déploiement de sites web'
            start={true}
            resH='px'
            fontSize={0.8} />

        <PopUp  
            y={size / 5 * 3.5 - 120} 
            w={80}
            h={50}
            content='Conseil - Accompagnement - Référencement'
            start={true}
            resH='px'
            fontSize={0.8} />

        <div className="cog-ctn-mobile">

            <CogWheel size={250} orientation='right'>
                <video 
                    width={280} 
                    autoPlay
                    muted
                    loop>
                        <source src={intro} type="video/mp4"></source>
                </video>
            </CogWheel>

            <CogWheel size={250} orientation='right'>
                <video 
                    width={280} 
                    autoPlay
                    muted
                    loop>
                        <source src={site_web_video_2} type="video/mp4"></source>
                </video>
            </CogWheel>

            <CogWheel size={250} orientation='right'>
                <video 
                    width={280} 
                    autoPlay
                    muted
                    loop>
                        <source src={site_web_video} type="video/mp4"></source>
                </video>
            </CogWheel>

        </div>


    </MobileSection>

    <MobileSection onCutNumber={build} >

        <PopUp 
            y={size * 0.8 - 80} 
            w={80}
            h={100}
            content='Ils ont des milliers de visites par semaine ! Venez découvrir ceux qui bénéficient déjà de nos services !'
            start={true}
            resH='px'
            fontSize={0.8} />

        <div style={{display:'contents'}}>
            
                <MakePopUp
                    y={size * 0.8 + 40}
                    w={90}
                    h={50}
                    delay={300}
                    resH='px'
                    isActive={true}
                    content={
                        <a  className='size-inherit satisfied-links'href='https://www.le-parnasse-versailles.fr/'>
                            <img className='size-inherit' src={leparnasse} style={{objectFit:'cover'}} />
                        </a>
                    } />
                        
                <MakePopUp
                    y={size * 0.8 + 110}
                    w={90}
                    h={50}
                    delay={300}
                    resH='px'
                    isActive={true}
                    content={
                        <a className='size-inherit satisfied-links' href='https://cabinetlaclef.com/'>
                            <img className='size-inherit' src={laclef} style={{objectFit:'cover'}} />
                        </a>
                } />

                <MakePopUp
                    y={size * 0.8 + 180}
                    w={90}
                    h={50}
                    delay={300}
                    resH='px'
                    isActive={true}
                    content={
                        <a className='size-inherit satisfied-links' href='https://www.zebrart.fr/'>
                            <img className='size-inherit' src={zebrart} style={{objectFit:'cover'}} />
                        </a>
                } />
            </div>

            <MakePopUp
                y={size * 0.8 + 280}
                w={90}
                h={280}
                resH='px'
                isActive={true}
                content={<form className="row px-5"
                            id='cf'
                            name="contact-form"
                            target="_blank"
                            action="https://www.se-get.zebrart.fr"
                            method='get'
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

    </MobileSection>

</section>
</>

}