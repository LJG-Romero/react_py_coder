/*** React ****/
import React, {useContext} from 'react';
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './flightPayment.css'

/*** Assets ****/
import img from '../assets/Success_bill_payment_icon.jpeg';

function Confirm() {

    const {idConfirm, setUserAmount, setCounterStatus} = useContext(StateContext);

    return (
        <div className="flightPay">

            <h1>Confirmación de Pago</h1>
            <div className="flightPay--Container">

                <div className="flightPayForm__Container">
                <h3>ID Reserva</h3>
                <p><strong>{idConfirm}</strong></p>
                {/* <p>Próximamente recibirá un correo con los datos de su reserva.</p> */}
                <h3>Gracias por volar con nosotros !</h3>

                <Link to={"/"} onClick={ () => {setCounterStatus(false); setUserAmount(1)} }>
                    <button className="generalBtn">Home</button>
                </Link>

                </div>

                
                <div className="flightPayImg confirm">
                    <img src={img} alt="Icono confirmación de pago" />
                </div>
            </div>

        </div>
    )
}

export default Confirm
