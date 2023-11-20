
import { getRandomNumber } from "../utils/Utils.js";
import Raf from "./Raf.js";

/**
 * Rudimentary Particle generator with a multitude of options
 */
export default class Particle extends Raf {
    
    constructor(obj) {
    super()
    Object.assign(this, obj)
    }

    update() {

        this.speed *= getRandomNumber(0.95,0.98)
        this.velocityX = Math.cos(this.angle) * this.speed
        this.velocityY = Math.sin(this.angle) * this.speed

        this.x += this.velocityX
        this.y += this.velocityY
    }

    draw() {

        this.ctx.beginPath();

        for (let i = 1; i <= 6; i++) {
            const angle = i * Math.PI / 3;
            this.ctx.lineTo(this.x + this.size * Math.cos(angle),this.y + this.size * Math.sin(angle));
        }

        this.ctx.closePath();

        this.ctx.fillStyle = this.color;
        this.ctx.stroke()
        this.ctx.strokeStyle = this.strokeS
        this.ctx.lineWidth = '2'
        this.ctx.globalAlpha = this.alpha
        this.ctx.fill();

    }

    onRaf() {

        if ( this.velocityX > -0.1 && this.velocityX < 0.1) {
            window.cancelAnimationFrame
        } else {
            this.update()
            this.draw();
        }
        

        }
}