import { ErrorBoundary } from "react-error-boundary"
import { CustomSlideIn } from "../animation/SlideIn"
import { useToggle } from "../../hooks/useToggle"

/**
 * @param {string} side to place the message compared to the content it needs to appear next of. Left to appear on the
 * left of the content, right to appear on the right
 * @param {string} message  must always be of type string
 * @param {void} content can be a component, a string or a number, hovering on it will trigger the message
 * @returns 
 */

export default function SideMessage({side='left', content = '', directionX = true, ...props}) {

    const [appear, setAppear] = useToggle()

    const handleError = () => {
        try {
            typeof(props.message) !== 'string'
        } catch (error) {
            throw error;
        }
    }

    const messageAppear = appear && <CustomSlideIn directionX={directionX} >
                                        <p className={`side-message appear-${side}`}
                                            style={{
                                                fontSize : props.size,
                                                color : props.color,
                                            }}>{props.message}
                                        </p>
                            </CustomSlideIn>

    return <ErrorBoundary componentStack={handleError}>

        {directionX && messageAppear}

        <div className={`side-message-ctn ${props.className}`} onMouseOver={setAppear} onMouseOut={setAppear} >
            {content}
        </div>

        {!directionX && messageAppear}

    </ErrorBoundary>
}