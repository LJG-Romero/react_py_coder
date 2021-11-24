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

    const {idConfirm} = useContext(StateContext);

    return (
        <div className="flightPay">

            <h1>Confirmación de Pago</h1>
            <div className="flightPay--Container">

                <h3>ID Reserva {idConfirm}</h3>
                
                <div className="flightPayImg">
                    <img src={img} alt="Icono confirmación de pago" />
                </div>
            </div>

        </div>
    )
}

export default Confirm
