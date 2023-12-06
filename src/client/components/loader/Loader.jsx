import { createPortal } from "react-dom";

/**
 * 
 * @returns a loader component with shifting colors
 */
export default function Loader({nbr = 20}) {

  const nbrLoaderSprites = nbr

  return createPortal(<section className="loader-container">
  
    <div className="loader">
  
      {[...Array(nbrLoaderSprites)].map((e, i) => <span style={{"--i": + i}} key={i}></span>)}
  
    </div>
  </section>, document.body)

  }

