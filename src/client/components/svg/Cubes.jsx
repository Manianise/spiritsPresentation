import { ReactSVG } from "react-svg";
import { useTheme } from "../../hooks/useTheme";

/**
 * 
 * @param {int} ctnW  default 100
 * @param {string} unit default px
 * @returns 
 */

export default function Cubes({ctnW = 100, unit = 'px'}) {

    const {isLight} = useTheme()
    const handleInjection = (svg) => isLight && svg.classList.add('logo-svg-lightmode');

    return <div className="cubes" data-speed="7">

            <div id="light-cube" className="cubes-svg" style={{width: ctnW + unit, height: ctnW + unit}} data-speed="8">
                <ReactSVG src="./svg/cubes/light_blue_cubes.svg" />
            </div>
            <div id="light-cube-bg" className="cubes-svg" style={{width:2 * ctnW + unit, height: (2 * ctnW + (parseInt(ctnW / 5) + parseInt(ctnW / 10)))+ unit}}>
                <ReactSVG src="./svg/cubes/background_cubes.svg" afterInjection={handleInjection}/>
            </div>
        </div>        
}