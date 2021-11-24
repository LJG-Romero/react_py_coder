/*** React ****/
import React from 'react'
import { Link } from 'react-router-dom';

/*** Styles ****/
import './footer.css';

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <div>
            <div>
                <section>
                    <h3>Más Información</h3>
                    <ul>
                        <li>Preguntas Frecuentes</li>
                        <li>Políticas de Equipaje</li>
                        <li>Políticas Covid-19</li>
                    </ul>
                </section>

                <section>
                    <h3>Gestioná tu Reserva</h3>
                    <ul>
                        <li>Check In</li>
                    </ul>
                </section>

                <section>
                    <h3>Te sumás al equipo?</h3>
                    <ul>
                        <li>Trabajá con Nosotros</li>
                    </ul>
                </section>
            </div>
            
            <div>
                <Link to="/CarritoDeVuelos" className="detail">
                    <FontAwesomeIcon icon={faInstagram} size='lg' onClick={ () => setCounterStatus(true)} />
                </Link>
                <Link to="/CarritoDeVuelos" className="detail">
                    <FontAwesomeIcon icon={faTwitter} size='lg' onClick={ () => setCounterStatus(true)} />
                </Link>
                <Link to="/CarritoDeVuelos" className="detail">
                    <FontAwesomeIcon icon={faFacebookF} size='lg' onClick={ () => setCounterStatus(true)} />
                </Link>
            </div>
            
        </div>
    )
}

export default Footer
