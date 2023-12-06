import CanvasParticleBg from "../canvas/CanvasParticleBg"
import PopUp from "../popup/PopUp"
import CogWheel from "../svg/CogWheel"
import intro from '../../assets/video/intro.mp4'
import site_web_video_2 from '../../assets/video/site_web_video_2.mp4'
import site_web_video from '../../assets/video/site_web_video.mp4'
import { Fade } from "react-awesome-reveal"
import { VideoSpinner } from "../loader/VideoSpinner"

/**
 * 
 * @returns the static page of 3rd slide
 */
export default function Skills() {

    return <> 
            <PopUp 
                x={3} 
                y={3} 
                w={25}
                h={10}
                content='Nos compétences'
                start={true} />

            <PopUp 
                x={27} 
                y={51} 
                w={23}
                h={40}
                zIndex={8}
                content={
                    <ul className="list-group m-2" style={{listStyle:'none', textAlign:'left', zIndex:3, fontSize:`${screen.availWidth > 1920 ? 1.5 : 0.8 }rem`}}>
                        <li>Montage vidéo - Web design - Image</li>
                        <hr></hr>
                        <li>Déploiement de sites Web</li>
                        <hr></hr>
                        <li>Conseil - Accompagnement - Référencement</li>
                    </ul>
                }
                borderSize={3}
                textSize={0.8} />

                <div className="priority" style={{position:'absolute'}}>

                    <Fade>
                        <div className="cog-skills-ctn">
                            <CogWheel 
                                size={screen.availWidth / 4.5}
                                id='cog-1'
                                orientation='right'>
                                <VideoSpinner path={intro} />
                            </CogWheel>
                            <CogWheel 
                                size={screen.availWidth / 4.5} 
                                id='cog-2'
                                orientation='left'>
                                    <VideoSpinner path={site_web_video_2} />
                            </CogWheel>
                            <CogWheel 
                                size={screen.availWidth / 4.5} 
                                id='cog-3'
                                orientation='left'>
                                    <VideoSpinner path={site_web_video} />
                            </CogWheel>

                        </div>
                    </Fade>

                </div>

                <CanvasParticleBg nbr={35} />

                
    </>
    
}