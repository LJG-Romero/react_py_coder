import React, {useContext} from "react";
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './flightCart.css'

/*** Components ****/
import ItemCart from "../components/ItemCart";

function FlightCart() {

    const {purchaseContainer, handlePurchaseContainer, setCounterStatus, setUserAmount, totalPrice} = useContext(StateContext);
    console.log(purchaseContainer);

    if (purchaseContainer.length > 0){
        purchaseContainer.sort( function(a,b){
            return a.id - b.id;
        } 
    )
}

    return (
        <div className="flightCart">
            <h1>Carrito de Vuelos </h1>
                {purchaseContainer.length === 0?
                    <div className="flightCart__Empty">
                        <p className="flightCart__P">Nada por aquí, nada por allá ...</p>
                        <div className="btnContainer">
                            <p className="flightCart__P">Ganas de viajar?</p>
                            <Link to={"/"} className="detail">
                                <button className="generalBtn" onClick={ () => {setCounterStatus(false); setUserAmount(1)} } >Iniciar reserva</button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className="flightPay--Container">
                        <div className="flightCart__Container">
                            {purchaseContainer.map ( (purch) => {
                                return(
                                    <ItemCart data={purch} key={purch.origin} />     
                                )
                            })}
                            <div className="btnContainer">
                                <button className="generalBtn" onClick={handlePurchaseContainer}>Vaciar carrito</button>
                                <Link to={"/"} className="detail">
                                    <button className="generalBtn" onClick={ () => {setCounterStatus(false); setUserAmount(1)} } >Nueva reserva</button>
                                </Link>
                                <Link to={"/Pasajeros"} className="detail">
                                    <button className="generalBtn" >Finalizar compra</button>
                                </Link>
                            </div>
                        </div>
                        <div className="flightPayForm__Container total">
                            <h3>Total</h3>
                            <p>$ <strong>{totalPrice}</strong></p>

                        </div>
                        
                    </div>
                    
                }
        </div>
    )
}

export default FlightCart