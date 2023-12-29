import { useTheme } from '../../hooks/useTheme';
import { useIntersectionObserver } from "@uidotdev/usehooks";

/**
 * 
 * @param {bool} start means pop up appears from left default appears frrom right
 * @param {int} delay in milliseconds before the animation starts
 * @param {int} speed in milliseconds for the animation speed
 * @param {string} resW and resH convert top, width and height into any resolution, but left is in vw
 * @param {bool} isActive Can set the popup to manually trigger
 * @borderSize is in px and textSize is in rem
 * @returns the point is to make a PopUp independant from viewport scrolling. In order to do that, add a 'isActive={true}' param
 */

export function MakePopUp({borderSize = 3, 
                            resW = 'vw', 
                            resH = 'vh', 
                            delay = 1500,
                            className = '',
                            position = 'absolute',
                             ...props }) {

    const {isDark} = useTheme()

    return <div ref={props.onRef} className={`popup-ctn ${className}`}
            style={{
            position: position,
            left : props.x + resW,
            top : props.y + resH,
            zIndex: props.zIndex,
        }}>
            <div  
                className={`static-ctn-style ${props.start ? 'slideInLeft' : 'slideInRight'} ${props.isActive && 'activeX'}`}
                style={{
                    position:'relative',
                    width: props.w + resW,
                    height : props.h + resH,
                }} >
                        <div 
                            className={`static-div-style ${props.isActive && 'open'}`} 
                            style={{
                                background:`${isDark ? '#151f2e8e' : '#ffffff1e'}`,
                                color:`${isDark ? '#ffffff' : '#696f8a'}`,
                                position:'relative',
                                transition: '1.5s all ease',
                                width: `${props.w}vw`,
                                height : 0 + resH,
                                border: `${borderSize}px solid #DE6E49`,
                                borderRadius: `${borderSize > 5 ? 10 : 5 }px`,
                                animationDelay:`${delay}ms`
                        }}>
                            <span 
                                className={`popup-span ${props.isActive && 'fadeIn'}`}
                                style={{
                                    opacity:0,
                                    fontSize:'10rem !important',
                                    animationDelay:`${delay + 1000}ms`,
                                    padding :'5px'
                                    }}>
                                    {props.content}
                            </span>
                        </div>
            </div>
        </div>

}

export default function PopUp({...props}) {

    const [ref, entry] = useIntersectionObserver({rootMargin:'50px'})

    return <>
            <MakePopUp
                onRef={ref}
                isActive={entry?.isIntersecting}
                borderSize={props.borderSize}
                fontSize={props.fontSize}
                resW={props.resW}
                resH={props.resH}
                w={props.w}
                h={props.h}
                x={props.x}
                y={props.y}
                speed={props.speed}
                content={props.content}
                delay={props.delay}
                start={props.start}
                zIndex={props.zIndex} />
    </>
}