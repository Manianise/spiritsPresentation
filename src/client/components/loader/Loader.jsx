/**
 * 
 * @returns a loader component with shifting colors
 */
export default function Loader() {

    const nbrLoaderSprites = 20;

  return <section className="loader-container default-flex default-size">
  
    <div className="loader">
  
      {[...Array(nbrLoaderSprites)].map((e, i) => <span style={{"--i": + i}} key={i}></span>)}
  
    </div>
  </section>

  }

