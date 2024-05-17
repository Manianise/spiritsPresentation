
import { useCallback, useState } from 'react'

/**
 * 
 * @param {int} initial 
 * @returns table with increment amount
 * 
 */

export function useIncrement({base = 0, max = Infinity, min = -Infinity, amount = 1}) {
    
    const [state, setState] = useState(base)

    return {
        count : state,
        increment : useCallback(() => setState(v => v >= max ? v : v + amount),[max]),
        decrement : useCallback(() => setState(v => v <= min ? v : v - amount),[min])
    }

}