import React, {useContext} from "react";
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './flightCart.css'

/*** Components ****/
import ItemCart from "../components/ItemCart";

function FlightCart() {

    const {purchaseContainer, handlePurchaseContainer,test, setCounterStatus, setUserAmount} = useContext(StateContext);
    console.log(purchaseContainer);
    console.log(test)

    // function handlePurchaseContainer() {
    //     setPurchaseContainer([]);
    //     console.log(purchaseContainer);
    // }

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
                                <button className="generalBtn" >Iniciar reserva</button>
                            </Link>
                        </div>
                    </div>
                    :
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
                            <Link to={"/"} className="detail">
                                <button className="generalBtn" onClick={ () => {setCounterStatus(false);setUserAmount(1)} }>Finalizar compra</button>
                            </Link>
                        </div>
                    </div>
                }
        </div>
    )
}

export default FlightCart

{/* <div className="provisoryStyle">
    <h1>Carrito de Vuelo</h1>
    <p>En Construcción</p>
    <div className="provisoryStyle__Img">
        <img src={img} alt="En Construcción" />
    </div>
</div> */}