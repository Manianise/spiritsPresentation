import CanvasParticleBg from "../canvas/CanvasParticleBg"
import PopUp from "../popup/PopUp"
import CogWheel from "../svg/CogWheel"
import intro from '../../assets/video/intro.mp4'
import site_web_video_2 from '../../assets/video/site_web_video_2.mp4'
import site_web_video from '../../assets/video/site_web_video.mp4'
import { Slide } from "react-awesome-reveal"
import { VideoSpinner } from "../loader/VideoSpinner"
import { useTheme } from "../../hooks/useTheme"

/**
 * 
 * @returns the static page of 3rd slide
 */
export default function Skills() {

    const {isLight} = useTheme()

    return <> 
            <PopUp 
                x={3} 
                y={13} 
                w={25}
                h={10}
                content='Nos compétences'
                start={true} />


                <div style={{position:'absolute', zIndex:5}}>

                    <div className="cog-skills-ctn">
                        <Slide cascade>
                                <CogWheel 
                                    id="cog-1"
                                    size={screen.availWidth / 4.5}
                                    fillColor={isLight ? '#78608b7e' : '#151f2e8e'}
                                    orientation='right'>
                                    <VideoSpinner path={intro} />
                                </CogWheel>
                                <CogWheel
                                    id="cog-2"
                                    size={screen.availWidth / 4.5}
                                    fillColor={isLight ? '#78608b7e' : '#151f2e8e'} >
                                        <VideoSpinner path={site_web_video_2} />
                                </CogWheel>
                                <CogWheel 
                                    id="cog-3"
                                    size={screen.availWidth / 4.5}
                                    fillColor={isLight ? '#78608b7e' : '#151f2e8e'} 
                                    orientation='right'>
                                        <VideoSpinner path={site_web_video} />
                                </CogWheel>
                        </Slide>
                        <PopUp 
                            w={70}
                            h={10}
                            y={50}
                            zIndex={8}
                            fontSize={0.7}
                            content={ '- Créations multimédia | Déploiement web | Intelligence artificielle -'}
                            borderSize={3} />
                    </div>
                </div>

                <CanvasParticleBg nbr={35} />

                
    </>
    
}