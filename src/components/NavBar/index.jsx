import './navbar.css'
import '../CardWidget'
import CardWidget from '../CardWidget';

function NavBar(){
    return(
        <div className='div-navBar'>
            <ul className='ul-navBar'>
                <li> <a className='nav-items' href="/Home">Tiendita</a></li>
                <li> <a className='nav-items' href="/Productos">Nosotros</a></li>
                <li> <a className='nav-items' href="/Contacto"> Contacto</a></li>
            </ul>
            <CardWidget />
        </div>
    );
  }

export default NavBar;