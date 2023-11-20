import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import Particle from '../../class/Particle'
import Canvas from './Canvas'
import {getRandomColor, getRandomNumber, clear} from '../../utils/Utils'

/**
 * 
 * @param {int} nbr : nbr of particles in animation default : 1 
 * @returns 
 */
export default function ParticleAnimation({nbr = 1}) {
    
    const canvasRef = useRef(null)
    const [counter, setCounter] = useState(0)

    const cSizeX = window.innerWidth * 1.2
    const cSizeY = window.innerHeight * 1.2

    useLayoutEffect(() => {

            let timerId
            const animate = () => {
                setCounter(c => c + 1)
                timerId = requestAnimationFrame(animate)
            }
            timerId = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(timerId)
        }, [])

    // output graphics
    useEffect(() => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0,cSizeX, cSizeY)

    if (counter < 1) {

        for (let i = 0; i < nbr; i++) {
            new Particle({
          
                x : cSizeX / 2, 
                y :cSizeY / 2,
                angle:Math.random() * Math.PI * 2,
                color: getRandomColor(),
                alpha: getRandomNumber(0.1,0.8),
                size: getRandomNumber(15,70),
                speed:getRandomNumber(7,25),
                strokeS:'#d3725b',
                ctx: ctx,
                noRaf:false
            });
          }
        
    }

    return cancelAnimationFrame(counter)

    }, [counter])


  return <Canvas onRef={canvasRef} w={cSizeX} h={cSizeY} />

}
