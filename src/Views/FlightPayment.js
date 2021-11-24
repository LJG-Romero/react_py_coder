/*** React ****/
import React, {useContext} from 'react';
import { Link } from "react-router-dom";

/*** Firebase ****/
import { collection, addDoc } from "firebase/firestore"
import {db} from "../firebase/firebaseConfig"

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './flightPayment.css'

/*** Assets ****/
import img from '../assets/Pax-Icon.jpeg';

function FlightPayment() {

    const {setIdConfirm, purchaseContainer} = useContext(StateContext);

    const purchRegister = async () => {

        const query = collection(db, 'flightPurchases');
        const response = await addDoc(query,{
            purchs: purchaseContainer
        });
        console.log(response.id)
        let temp = response.id;
        setIdConfirm(temp)
    }

    return (
        <div className="flightPay">

            <h1>Pago de la Reserva</h1>
            <div className="flightPay--Container">

                <form action="" className="flightPayForm" >

                    <div className="flightPayForm__Container">
                        <h3>Datos Tarjeta</h3>

                        <label htmlFor="cardNumber">Número de la tajeta</label>
                        <input type="number" name="cardNumber" placeholder="número de la tarjeta" minLength="16" maxLength="16" className="flightPay__Input" required/>

                        <label htmlFor="cardName">Nombre</label>
                        <input type="text" name="cardName" placeholder="como figura en la tarjeta" className="flightPay__Input" required/>
                        
                        <div className="flightPayForm__Container--Scrty">
                            
                            <div className="scrty__Container">
                                <label htmlFor="expiration">Vencimiento</label>
                                <input type="text" name="expiration" placeholder="xx/xx" minLength="5" maxLength="5" style={{width:"75px"}} className="flightPay__Input" required />
                            </div>

                            <div className="scrty__Container">
                                <label htmlFor="security">Código Seguridad</label>
                                <input type="text" name="security" placeholder="xxx" minLength="3" maxLength="3" style={{width:"75px"}} className="flightPay__Input" required />
                            </div>
                        </div>

                        <label htmlFor="cuotification">Forma de pago</label>
                        <select name="cuotification">
                            <option value="" selected>1 pago sin interés</option>
                            <option value="" disabled>Cuotas -- PRÓXIMAMENTE</option>
                        </select>

                    </div>

                    <Link to={"/ConfirmacionPago"} onClick={purchRegister}>
                        <button className="generalBtn" >Pagar</button>
                    </Link>
                </form>

                <div className="flightPayImg">
                    <img src={img} alt="Icono sección de pago" />
                </div>
            </div>

        </div>
        
    )
}

export default FlightPayment
