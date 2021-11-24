import React, {useContext}from 'react';
import { Link } from 'react-router-dom';

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './header.css';

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

function Header(){
    const {purchaseContainer,setFocus,setDestSelect, setCounterStatus,setUserAmount} = useContext(StateContext);

    return(
        <div className="header">
            <Link to="/" className="detail">
                <div className="header__Logo" onClick={ () => {setFocus(false); setDestSelect(false); setCounterStatus(false); setUserAmount(1)} }>
                    <h1 className="logo">Proyect Brand</h1>
                </div>
            </Link>
            <nav className="header__Nav">
                <ul className="nav__Links">
                    <Link to="/" className="li" onClick={ () => {setFocus(false); setDestSelect(false);setCounterStatus(false); setUserAmount(1)} }>Home</Link>
                    <Link to="/Nosotros" className="li">Nosotros</Link>
                    <Link to="/Destinos" className="li">Destinos</Link>
                    <Link to="/Contacto" className="li">Contacto</Link>
                    
                </ul>
                <ul className="nav__Cart">
                    <Link to="/CarritoDeVuelos" className="detail">
                        <FontAwesomeIcon icon={faPlane} size='lg' onClick={ () => setCounterStatus(true)} />
                    </Link>
                </ul>
                <div className="nav__Count">
                    <p>{purchaseContainer.length}</p>
                </div>
            </nav>
        </div>
    );
}

export default Header;