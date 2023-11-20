import { useState, useCallback } from "react"
/**
 * 
 * @param {max} number slider size 
 * @returns {goTo} returns the setState function for dots handler
 */
export default function useChangeSlide({base = 0, max}) {

    const [state, setState] = useState(base)
    const goTo = setState

    return {
        state : state,
        next : useCallback(() => state < max - 1 && setState(state + 1)),
        previous : useCallback(() => state > 0 && setState(state - 1) ),
        goTo : goTo,
    }
}