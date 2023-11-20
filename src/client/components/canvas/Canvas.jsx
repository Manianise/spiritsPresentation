export default function Canvas({...props}) {

    const dpr = devicePixelRatio

    return <canvas 
                ref={props.onRef} 
                className={props.className}
                style={{width:props.w, height:props.h, zIndex:props.zIndex = 0}}
                width={props.w * dpr}
                height={props.h * dpr}
                 >
Your browser does not support canvas</canvas>

}