/**
 * 
 * Utils 
 *

 */

export const mapRange = (a, b, c, d, e) => {
    return ((a - b) * (e - d)) / (c - b) + d;
  }
  const lerp = (v0,v1,t) => {
    return v0 * (1 - t) + v1 * t
  }
  
  export const sin = (t) => Math.sin(t)
  export const cos = (t) => Math.cos(t)
  export const PI = Math.PI
  export const TAU = PI * 2

  export function clear(context, w, h) {
    context.clearRect(
      0,
      0,
      w,
      h
    )
  }
  
  export function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  export function getRandomColor() {
    const particlesHex = 
    [
      '#4f4872',
      '#704A80',
      '#CCC48B',
    ]
    return particlesHex[Math.floor(Math.random() * particlesHex.length)]
  }
  
  
  /*
  *
  * Callback functions related to screen positionning
  *******************************************************************/
  
  export function getCtnBounds(selector) {
  
    const elt = document.querySelector(selector);
    const side = elt.getBoundingClientRect();
    return {left:side.left,top:side.top,right:side.right,bottom:side.bottom};
  
  }
  
  export function getCtnSize(selector) {
  
    const elt = document.querySelector(selector);
    return {w:elt.clientWidth,h:elt.clientHeight};
  
  }
  
  export function getMousePos(e) {
  
    return {x:e.screenX,y:e.screenY};
  
  }
  /**
   * 
   * @param {htmlCollection} container needs to be referenced after the html has been set
   * @param {dataSpeed} data attribute from child element
   */
  
  export function parallaxOnMouseMove(container = null, dataSpeed = '') {

    const arrayFromCollection = container !== null && [...container]
    
    document.onmousemove = (e) => {

        const pos = getMousePos(e);
    
        arrayFromCollection.forEach(layer => {
    
          const speed = layer.lastChild.getAttribute(dataSpeed) === null ? 1 : parseInt(layer.lastChild.getAttribute(dataSpeed));
          const x = (pos.x - window.innerWidth / 2) / speed;
          const y = (pos.y - window.innerHeight / 2) / speed;
          const mouseMoveKeyframe = new KeyframeEffect(
            layer, 
              [
                { transform : `translate(${-x}px, ${-y}px)`, offset : 1 },
                {transition: '100ms all linear'}
              ], 
              { duration: 50, fill: 'forwards', easing:'linear' }
            );
          const mouseMoveEvent = new Animation(mouseMoveKeyframe, document.timeline);
          mouseMoveEvent.play();
      
        })
        
      }
}
  
  
  /**
   * 
   * @param {*} func function on which we apply debouncer
   * 
   * @returns 
   */
  
  
  export default function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }