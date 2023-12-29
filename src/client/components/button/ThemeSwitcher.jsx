import { useTheme } from "../../hooks/useTheme"
import { ReactSVG } from "react-svg"
import debounce from "../../utils/Utils"


/**
 * 
 * @returns change theme on click
 */
export default function ThemeSwitcher () {

    const {isLight, toggleTheme} = useTheme()

    return  <div onClick={debounce(toggleTheme, 500)}>
                <ReactSVG src={`./svg/${isLight ? 'moon' : 'sun' }.svg`} />{' '}
            </div>
}