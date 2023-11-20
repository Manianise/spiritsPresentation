import PopUp from "../popup/PopUp";
import laclef from '../../assets/clients/cblaclef.webp'
import leparnasse from '../../assets/clients/leparnasse.webp'
import zebrart from '../../assets/clients/zebrart.webp'
import CanvasParticleBg from "../canvas/CanvasParticleBg";
import SideMessage from "../string/SideMessage";

/**
 * 
 * @returns the static page of 4th slide
 */
export default function Satisfied() {


    return <>
                <PopUp
                x={3}
                y={3}
                w={20}
                h={35}
                start={true}
                content='Ils ont des milliers de visiteurs par semaine ! Venez découvrir ceux qui bénéficient déjà de nos services !' />
                    <div style={{display:'contents'}}>
                        <PopUp
                            y={1}
                            w={50}
                            h={30}
                            content={
                                <SideMessage
                                    className='size-inherit'
                                    content={
                                        <a  className='size-inherit satisfied-links'href='https://www.le-parnasse-versailles.fr/'>
                                        <img className='size-inherit' src={leparnasse} style={{objectFit:'cover'}} />
                                        
                                    </a>
                                }   message='Restaurant' />

                            } />
                                
                        <PopUp
                            y={34}
                            w={50}
                            h={30}
                            content={
                                <SideMessage
                                className='size-inherit'
                                content={
                                    <a className='size-inherit satisfied-links' href='https://cabinetlaclef.com/'>
                                    <img className='size-inherit' src={laclef} style={{objectFit:'cover'}} />
                                </a>
                            }   message='Cabinet Immobilier' />

                        } />

                        <PopUp
                            y={67}
                            w={50}
                            h={30}
                            content={
                                <SideMessage
                                className='size-inherit'
                                content={
                                    <a className='size-inherit satisfied-links' href='https://www.zebrart.fr/'>
                                    <img className='size-inherit' src={zebrart} style={{objectFit:'cover'}} />
                                </a>
                            }   message='Collectif Web Artistes' />

                        } />
                </div>
                <CanvasParticleBg nbr={25} />
            </>

}