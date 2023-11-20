
export default function MobileSection ({children, className = '', onCutNumber, onRef}) {

    return <div ref={onRef} className={`row mobile-section ${className}`} style={{height:`${onCutNumber}px`, width:'100vw'}}>
        {children}
    </div>
}