import React, {useContext} from "react";
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Components ****/
import ElementCart from "../components/ElementCart";

function FlightCart() {

    const {purchaseContainer, setPurchaseContainer} = useContext(StateContext);
    console.log(purchaseContainer);

    function handlePurchaseContainer() {
        setPurchaseContainer([]);
        console.log(purchaseContainer);
    }

    return (
        <div className="provisoryStyle">
            <h1>Carrito de Vuelo - <strong>En Construcción</strong></h1>
                {purchaseContainer.length === 0?
                    <div>
                        <p>Nada por aqui, nada por allá ...</p>
                        <p>Ganas de viajar?</p>
                        <Link to={"/"} className="detail">
                            <button className="book" >Iniciar reserva</button>
                        </Link>
                    </div>
                    :
                    <div>
                        {purchaseContainer.map ( (purch) => {
                            return(
                                <ElementCart data={purch} />     
                            )
                        })}
                        <div>
                            <button className="book" onClick={handlePurchaseContainer}>Vaciar carrito</button>
                            <Link to={"/"} className="detail">
                                <button className="book" >Sumar otra reserva</button>
                            </Link>
                            <Link to={"/"} className="detail">
                                <button className="book" >Finalizar compra</button>
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