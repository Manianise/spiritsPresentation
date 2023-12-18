import Slider from './components/slider/Slider'
import Intro from './components/desktop/Intro';
import Presentation from './components/desktop/Presentation';
import Skills from './components/desktop/Skills'
import Satisfied from './components/desktop/Satisfied'
import ContactPage from './components/desktop/ContactPage'
import MobileVersion from './components/mobile/MobileVersion';
import Header from './components/header/Header';
import ModalAI from './components/modals/ModalAI';
import { ReactSVG } from 'react-svg';


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

    const handleClick = () => {
        console.log('light mode')
    }

    const items = [
        <ModalAI />,
        <div onClick={handleClick}>
            <ReactSVG src="./svg/sun.svg"/>{' '}
        </div>
    ]

    const App = () => screen.availWidth > 900 ? <DesktopVersion /> : <MobileVersion />

    return <>

        <Header items={items} />
        <App />

    </>

}



