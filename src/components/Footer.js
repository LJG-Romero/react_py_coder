/*** React ****/
import React from 'react'
import { Link } from 'react-router-dom';

/*** Styles ****/
import './footer.css';

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="footer" >
            <div className="footer__Container divider" >
                <section className="footer__Data" >
                    <h3>Más Información</h3>
                    <p>Preguntas Frecuentes</p>
                    <p>Políticas de Equipaje</p>
                    <p>Políticas Covid-19</p>
                    {/* <ul>
                        <li>Preguntas Frecuentes</li>
                        <li>Políticas de Equipaje</li>
                        <li>Políticas Covid-19</li>
                    </ul> */}
                </section>

                <section className="footer__Data" >
                    <h3>Gestioná tu Reserva</h3>
                    <p>Check In</p>
                    {/* <ul>
                        <li>Check In</li>
                    </ul> */}
                </section>

                <section className="footer__Data" >
                    <h3>Te sumás al equipo?</h3>
                    <p>Trabajá con Nosotros</p>
                    {/* <ul>
                        <li>Trabajá con Nosotros</li>
                    </ul> */}
                </section>
            </div>
            
            <div className="footer__Container bottom" >
                <div className="footer__SocialMedia" >
                    <Link to="/" className="detail">
                        <FontAwesomeIcon icon={faInstagram} size='2x'/>
                    </Link>
                    <Link to="/" className="detail">
                        <FontAwesomeIcon icon={faTwitter} size='2x'/>
                    </Link>
                    <Link to="/" className="detail">
                        <FontAwesomeIcon icon={faFacebookF} size='2x'/>
                    </Link>
                </div>

                <div className="footer__Credits" >
                    <p class="credits" >Powered by <strong>Lucas Romero</strong></p>
                    <Link to="https://www.vecteezy.com" className="detail">
                        <p class="collaborations">Img supplier <strong>Vecteezy</strong></p>
                    </Link>
                    
                </div>

                <div className="footer__Logo">
                    <h1 className="logo"><i>Airline Project</i></h1>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
