/**
 * 
 * @param {array} items bootstrapped
 * @returns 
 */

import { useTheme } from "../../hooks/useTheme"

export default function Header({items = [] }) {

  const {theme, isDark} = useTheme()

return <nav className={`row container-fluid header ${!isDark && 'light'}`} style={{background:`${isDark ? '#0000002e' : '#ffffff2e'}`}}>
          <ul className="header-menu">
              {items.map((item, i) => <li  
                className={`btn btn-${theme} header-menu-item col-md-2 m-1`} key={i} >{item}
                </li>
            )}
          </ul>
        </nav>

}