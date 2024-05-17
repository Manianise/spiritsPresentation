import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext= createContext({
    theme:'dark',
    toggleTheme : () => {}
})

export function useTheme () {
    
    const {theme, toggleTheme} = useContext(ThemeContext)

    return {
        isLight : theme === 'light',
        isDark : theme === 'dark',
        theme,
        toggleTheme
    }
}

export function ThemeContextProvider ({children}) {

    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark')

    return <ThemeContext.Provider value={{
        theme,
        toggleTheme

    }}>
        {children}
    </ThemeContext.Provider>
}