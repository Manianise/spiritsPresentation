import PopUp from '../popup/PopUp'
import CanvasParticleBg from '../canvas/CanvasParticleBg'

/**
 * 
 * @returns the static page of 2nd slide
 */
export default function Presentation() {

    return <>
    <CanvasParticleBg nbr={40} />
    <PopUp 
x={3} 
y={8} 
w={25}
h={10}
content='Qui sommes-nous ?' />
    <PopUp
w={30}
h={80}
start={true}
content="Spécialiste du design web et média, le développement d'applications et la mise en place d'outils permettant l'organisation et la création d'événements, Spirits entertainment vous offre ses services pour booster votre visibilité sur le web ainsi que recevoir des conseils et un accompagnement personnalisés pour préparer votre transition vers les dernières technologies" />
     </>
   
}