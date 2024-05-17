export default function VideoLoop({path}) {
    return <video 
                src={path}
                autoPlay 
                muted 
                loop
                style={{objectFit:'contain',
                maxWidth:'inherit',
                width:'100%'}}>
            </video>
}