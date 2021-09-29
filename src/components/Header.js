import React from 'react';
import './header.css';

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
        <div className="header">
            <div className="header__Logo">
                <h1 className="logo">Proyect Brand</h1>
            </div>
            <nav className="header__Nav">
                <ul className="nav__Links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Destinos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <ul className="nav__Cart">
                    <FontAwesomeIcon icon={faPlane} size='lg' />
                </ul>
            </nav>
        </div>
    );
}

export default Header;