/**
 * Rudimentary Request animation Frame class
 */
export default class Raf {

  constructor() {

    this.raf()
    this.noRaf = true
    
  }

  raf() {
    
    if(!this.noRaf) {
      window.requestAnimationFrame(() => {
        this.raf()
        this.onRaf()
      })
    }
  }
}