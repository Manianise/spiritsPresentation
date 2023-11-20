import React, { useRef, useEffect } from 'react'
import Canvas from './Canvas'
import Particle from '../../class/Particle'
import {getRandomColor, getRandomNumber} from '../../utils/Utils'
import {Fade} from 'react-awesome-reveal'

/**
 * 
 * @param {int} xStart of type int is width of canvas
 * @param {int} yStart of type int is height of canvas
 * @returns 
 */
export default function CanvasParticleBg({nbr = 30, 
  xStart = window.innerWidth * 1.2, 
  yStart = window.innerWidth * 1.2,
  ...props}) {

 const canvasRef = useRef(null)

useEffect(() => {
  
  const ctx = canvasRef.current.getContext('2d')

  for (let i = 0; i < nbr; i++) {

    new Particle({
        x : xStart / 2 + getRandomNumber(-xStart * 0.6, xStart * 0.6),
        y : yStart / 2 + getRandomNumber(-yStart * 0.6, yStart * 0.6),
        angle:Math.random() * Math.PI * 2,
        color: getRandomColor(),
        alpha: getRandomNumber(0.1,0.8),
        size: getRandomNumber(15,70),
        speed:getRandomNumber(7,25),
        strokeS:'#d3725b',
        ctx: ctx,
    })
  }
}, [])


  return <Fade triggerOnce={true}>
      <Canvas onRef={canvasRef} w={xStart} h={yStart} className={props.className} />
    </Fade>
}
