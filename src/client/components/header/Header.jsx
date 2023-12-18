/**
 * 
 * @param {array} items bootstrapped
 * @returns 
 */

export default function Header({items = []}) {


return <>

  <nav className="row container-fluid header">
    <ul className="header-menu">
        {items.map((item, i) => <li  
          className={`btn btn-info header-menu-item col-md-2 m-1`} key={i} >{item}
          </li>
      )}
    </ul>
  </nav>
</>

}