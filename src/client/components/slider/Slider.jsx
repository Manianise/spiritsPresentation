import { ReactSVG } from 'react-svg';
import { useToggle } from '../../hooks/useToggle';
import useChangeSlide from '../../hooks/useChangeSlide';
import useCount from '../../hooks/useCount';
import SideMessage from '../string/SideMessage';

/**
 * 
 * @param {int} slideID type int to know if first slide and last slide will show button svg 
 * @returns 
 */
function Buttons({onNext, onPrevious, slideID, sliderLength}) {

    const messages = [
        'Accueil',
        'Qui sommes nous ?',
        'Notre savoir-faire',
        'Ils sont satisfaits',
        'Contactez-nous !'
    ]

    const message = {
        btnLeft : slideID !== 0 && messages[slideID - 1],
        btnRight : messages[slideID + 1]
    }


    return  <div className="button-slider-container">
                <div 
                    className="buttons button-left priority" 
                    onClick={onPrevious} 
                    style={{visibility : slideID === 0 ? 'hidden' : 'visible'}}>
                    <SideMessage side='left'
                        directionX={false} 
                        size='0.8em' 
                        content={<ReactSVG src="logo.svg" />} 
                        message={message.btnLeft} />
                </div>
                <div 
                    className="buttons button-right priority" 
                    onClick={onNext} 
                    style={{visibility : slideID === sliderLength - 1 ? 'hidden' : 'visible'}}>
                    <SideMessage side='right'
                        size='0.8em' 
                        content={<ReactSVG src="logo.svg" />}
                        message={message.btnRight} />
                </div>
            </div>

}

function SliderDots({id, isActive, onPositionChange}) {

    const handleClick = () => onPositionChange(id)

   return <div 
            id={'dot-' + id} 
            key={id} 
            className={( isActive ? 'bg-selected' : '') + ' dot-style'} 
            onClick={!isActive ? handleClick : undefined}>
        </div>

}

function SliderDotsContainer({...props}) {

    const dots = []

    for (let i = 0; i < props.nbrDots; i++) {
        dots.push( 
            <SliderDots 
                id={i} 
                key={i} 
                isActive={i === props.position ? props.isActive : !props.isActive} 
                onPositionChange={props.setPosition} 
                onActiveChange={props.setIsActive} />
        )
    }
    return <div className='dot-container priority'>
                {dots}
            </div> 
}

/**
 * 
 * @param {id} id to be given automatically
 * @param {string} optionnal for SEO itemProp 
 * @returns 
 */
function Slide({...props}) {

    return <div 
                id={'slide-' + props.id} 
                itemProp={props.itemProp} 
                className={"slider-img"} style={{display : props.id !== props.position && 'none'}}>
            {props.content}
        </div>  
    }
/**
 * 
 * @param {array} slides type array
 * @param {bool} buttons if false, not shown
 * @param {bool} dots if false, not shown
 * @param {int} delay to delay apparition of slider items (ex: delay={2} will delay 2 seconds)
 * @returns 
 */
export default function Slider({...props}) {

    const slides = props.slides
    const [isActive, setIsActive] = useToggle(true)
    const {state, next, previous, goTo} = useChangeSlide({base : 0, max:slides.length})
    const {count, limit} = useCount({limit:props.delay})

    return <div className="slider-container">
                <div className="slider-gallery" style={{width: slides.length * 100 + 'vw'}}>
                            { slides.map(slide => <Slide 
                                                    itemProp='exampleOfWork'
                                                    id={slide.id} 
                                                    key={slide.id} 
                                                    content={slide.content}
                                                    position={state}
                                                    isActive={isActive}
                                                    onActiveChange={setIsActive} />)
                            }
                </div>
                <div className="slider-items">
                    {!props.buttons && count > limit && <Buttons
                                        onNext={next}
                                        onPrevious={previous}
                                        slideID={state}
                                        sliderLength={slides.length} />}
                {!props.dots && count > limit &&  <SliderDotsContainer 
                                        nbrDots={slides.length}
                                        setPosition={goTo}
                                        position={state}
                                        isActive={isActive}
                                        onActiveChange={setIsActive} />}
                </div>

            </div>
}


