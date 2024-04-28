

/**
 * 
 * @param {object} events object firing events on swipe direction (up, down, left, right) 
 * @returns swipeable component
 */

export default function Swipeable({children, ...props}) {

    // Swipe Up / Down / Left / Right
    var initialX = null;
    var initialY = null;

    const direction = (direction) => {
      switch (direction) {
        case L:
          
          break;
      
        default:
          break;
      }
    }
  
    const startTouch = (e) => {
      initialX = e.touches[0].clientX;
      initialY = e.touches[0].clientY;
    };
  
    const moveTouch = (e) => {
      if (initialX === null) {
        return;
      }
  
      if (initialY === null) {
        return;
      }
  
    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;
  
    var diffX = initialX - currentX;
    var diffY = initialY - currentY;
  
    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        events.L
      } else {
        // swiped right
        events.R
      }  
    } else {
      // sliding vertically
      if (diffY > 0) {
        events.U
      } else {
        // swiped down
        events.D
      }  
    }
  
    initialX = null;
    initialY = null;
  
    e.preventDefault();
  };
  return <div className={props.className} id={props.id} onTouchStart={startTouch} onTouchMove={moveTouch}>
    {children}
  </div>
}
    