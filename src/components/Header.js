import React from 'react';
import { Link } from 'react-router-dom';

/*** Styles ****/
import './header.css';

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
        <div className="header">
            <Link to="/" className="detail">
                <div className="header__Logo">
                    <h1 className="logo">Proyect Brand</h1>
                </div>
            </Link>
            <nav className="header__Nav">
                <ul className="nav__Links">
                    {/* <li><a href="#">Home</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Destinos</a></li>
                    <li><a href="#">Contacto</a></li> */}
                    <Link to="/" className="li">Home</Link>
                    <Link to="/Nosotros" className="li">Nosotros</Link>
                    <Link to="/Destinos" className="li">Destinos</Link>
                    <Link to="/Contacto" className="li">Contacto</Link>
                    
                </ul>
                <ul className="nav__Cart">
                    <Link to="/Carrito" className="detail">
                        <FontAwesomeIcon icon={faPlane} size='lg' />
                    </Link>
                    {/* <div className="nav__Cart__Count">
                        <p>0</p>
                    </div> */}
                </ul>
                <div className="nav__Count">
                    <p>0</p>
                </div>
            </nav>
        </div>
    );
}

export default Header;