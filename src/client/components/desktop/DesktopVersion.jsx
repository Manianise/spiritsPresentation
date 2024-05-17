import Intro from "./Intro"
import Presentation from "./Presentation"
import Skills from "./Skills"
import Satisfied from "./Satisfied"
import ContactPage from "./ContactPage"
import Slider from '../slider/Slider'

export default function DesktopVersion() {

   return <section  itemScope itemType="https://schema.org/ProfilePage" className={`desktop-version`}>
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