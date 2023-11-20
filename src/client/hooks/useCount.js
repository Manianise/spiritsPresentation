import { useState, useEffect } from "react";

/**
 * 
 * @param {int} base start
 * @param {int} by to increment by
 * @param {int} speed counts interval of the useCount hook (default 1000ms)
 * @returns counter every second
 */

export default function useCount({base = 0, by = 1, speed = 1000, limit = Infinity}) {

    const [state, setState] = useState(base)

    useEffect(() => {

      if (state <= limit) {

        const timer = setInterval(() => {
          setState(v => v + by)
        }, speed);
  
        return () => clearInterval(timer)
        
      }

    }, [state])

    return {
      count : state,
      limit : limit,
      speed : speed,
      increment : by
    }
  
  
  }