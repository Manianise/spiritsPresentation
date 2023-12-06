import Slider from './components/slider/Slider'
import Intro from './components/desktop/Intro';
import Presentation from './components/desktop/Presentation';
import Skills from './components/desktop/Skills'
import Satisfied from './components/desktop/Satisfied'
import ContactPage from './components/desktop/ContactPage'
import MobileVersion from './components/mobile/MobileVersion';
import ModalAI from './components/modals/ModalAI';
import {createPortal} from 'react-dom'
import { Fade } from 'react-awesome-reveal';


function DesktopVersion() {


   return <section  itemScope itemType="https://schema.org/ProfilePage" className='desktop-version'>
        <Slider
            slides={[
            {
                id:0,
                content: <Intro />
            },
            {
                id:1,
                content: <Presentation />
            },
            {
                id:2,
                content: <Skills />
            },
            {
                id:3,
                content: <Satisfied />
            },
            {
                id:4,
                content: <ContactPage />
            }

            ]}
            delay={1}
    />
    </section>
}


export default function App() {

    const App = screen.availWidth > 900 ? <DesktopVersion /> : <MobileVersion />

    return <>
    
    {App}

    {createPortal(<Fade delay={3000} className='modal-ai'>
                    <ModalAI />
                </Fade>, document.querySelector('#root'))}
            </>
    

}



