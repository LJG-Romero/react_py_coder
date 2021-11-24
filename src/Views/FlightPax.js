/*** React ****/
import React, {useContext} from 'react';
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './flightPayment.css'

/*** Components ****/
import ItemLeg from "../components/ItemLeg";

/*** Assets ****/
import img from '../assets/Payment-Icon.jpeg';

function FlightPax() {

    const {purchaseContainer} = useContext(StateContext);

    return (

        <div className="flightPay">

            <h1>Pasajeros</h1>
            <div className="flightPay--Container">

                <form action="" className="flightPayForm">

                    {
                        purchaseContainer.map( (purch) => {
                            return(
                                <ItemLeg data={purch} key={purch.id}/>
                            )} )
                    }
                    <Link to={"/Pago"}>
                        <button className="generalBtn">Tarjeta</button>
                    </Link>

                </form>
                
                <div className="flightPayImg">
                    <img src={img} alt="Icono sección pasajeros" />
                </div>
            </div>

        </div>
    )
}
export default FlightPax
