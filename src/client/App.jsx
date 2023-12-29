import DesktopVersion from './components/desktop/DesktopVersion';
import MobileVersion from './components/mobile/MobileVersion';
import Header from './components/header/Header';
import { items } from './components/header/Items';
import { useTheme } from './hooks/useTheme';


export default function App() {

    const {theme} = useTheme()


    const App = () => screen.availWidth > 900 ? <DesktopVersion /> : <MobileVersion />

    return <div className={theme}>

        <Header items={items} />
        <App />
    </div>

}



