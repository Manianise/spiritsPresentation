import { useIntersectionObserver } from "@uidotdev/usehooks";

/**
 * 
 * @param {bool} start means pop up appears from left default appears frrom right
 * @param {int} delay in milliseconds before the animation starts
 * @param {int} speed in milliseconds for the animation speed
 * @param {string} resW and resH convert top, width and height into any resolution, but left is in vw
 * @borderSize is in px and textSize is in rem
 * @returns the point is to make a PopUp independant from viewport scrolling. In order to do that, add a 'isActive={true}' param
 */

export function MakePopUp({borderSize = 3, 
                            resW = 'vw', 
                            resH = 'vh', 
                            fontSize = 1.2, 
                            delay = 1500,
                            className = '',
                             ...props }) {


    return <div ref={props.onRef} className={`popup-ctn ${className}`}
            style={{
            position: 'absolute',
            left : props.x + resW,
            top : props.y + resH,
            zIndex: props.zIndex,
        }}>
            <div  
                className={`static-ctn-style ${props.start ? 'slideInLeft' : 'slideInRight'} ${props.isActive && 'activeX'}`}
                style={{
                    width : props.w + resW,
                    height : props.h + resH
                }} >
                        <div 
                        className={`static-div-style ${props.isActive && 'open'}`} 
                        style={{ 
                            width: props.w + resW,
                            height : 0 + resH,
                            border: `${borderSize}px solid #DE6E49`,
                            borderRadius: `${borderSize > 5 ? 10 : 5 }px`,
                            animationDelay:`${delay}ms`
                        }}>
                            <span className={`popup-span ${props.isActive && 'fadeIn'}`}
                                
                                style={{
                                    opacity:0,
                                    fontSize:`${props.fontSize}rem`,
                                    animationDelay:`${delay + 1000}ms`
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