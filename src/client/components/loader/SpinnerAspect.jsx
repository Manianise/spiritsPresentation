import { Oval } from 'react-loader-spinner'

export default function SpinnerAspect() {
    return <div className="video-spinner">
            <Oval
                width={50}
                height={50}
                color='#b55d42'
                ariaLabel='oval-loading' />
    </div>
}