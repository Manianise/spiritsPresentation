import Loader from './components//loader/Loader'
import Slider from './components/slider/Slider'
import Intro from './components/desktop/Intro';
import Presentation from './components/desktop/Presentation';
import { Suspense } from 'react';
import Skills from './components/desktop/Skills'
import Satisfied from './components/desktop/Satisfied'
import ContactPage from './components/desktop/ContactPage'
import MobileVersion from './components/mobile/MobileVersion';

function DesktopVersion() {
   return <section  itemScope itemType="https://schema.org/ProfilePage" className='desktop-version'>
    <Suspense fallback={<Loader />}>
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
        </Suspense>
    </section>
}

function App() {

    const App = screen.availWidth > 900 ? <DesktopVersion /> : <MobileVersion />

    return <>
    
    {App} 
    
    </>

}

export default App
