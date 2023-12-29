export default function Canvas({...props}) {

    const { zIndex = 0 } = props
    const mediaSize = window.matchMedia("(max-width:1920px)")
    const dpr = mediaSize ? window.devicePixelRatio : 1

    return <canvas 
                ref={props.onRef} 
                className={props.className}
                style={{width:`${props.w * dpr}px`, height:`${props.h * dpr}px`, zIndex:zIndex}}
                width={props.w * dpr}
                height={props.h * dpr}
                 >
Your browser does not support canvas</canvas>

}