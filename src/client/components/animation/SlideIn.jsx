import Reveal from "react-awesome-reveal"
import {keyframes} from "@emotion/react"

/**
 * 
 * @param {bool} directionX true to appear from left, false to appear from right 
 * @returns react composite component 
 */

export function CustomSlideIn({ children, directionX = true }) {

    const customSlideIn = keyframes`
    
    from {
      opacity: 0;
      transform: translateX(${directionX ? '10px' : '-10px'});
    }
    
    to {
      opacity: 1;
      transform: translateX(0);
    `;

    return <Reveal keyframes={customSlideIn} >{children}</Reveal>;
  }