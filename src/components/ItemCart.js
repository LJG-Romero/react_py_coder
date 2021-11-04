import React, {useContext} from 'react'

/*** Context ****/
import { StateContext } from '../StateContext'

/*** Styles ****/
import './itemCart.css'

/*** Components ****/
import Counter from './Counter'

function ItemCart({data}) {
    const {calculatePurchAmount,setIdPurch,idPurch,removeItemCart} = useContext(StateContext)
    // console.log(data.id)
    // let tempp = data.id

    // function removeItemCart() {
    //     let temp = tempp - 1;
    //     let temp1 = purchaseContainer.splice(temp,1);
    //     setIdPurch(idPurch - 1)
    // }

    return (
        <div className="itemCart" >
            <div className="itemCart__Label">
                <p className="itemCart__L">Origen:</p>
                <p className="itemCart__L">Destino:</p>
                <p className="itemCart__L">Pasajeros:</p>
                <p className="itemCart__L">Precio:</p>
            </div>
            <div className="itemCart__Data">
                <p className="itemCart__P"><strong> {data.origin}</strong></p>
                <p className="itemCart__P"><strong> {data.destiny}</strong></p>
                <p className="itemCart__P"><strong>{data.userAmount}</strong></p>
                <p className="itemCart__Price"><strong> ${calculatePurchAmount(data)}</strong></p>
            </div>
            <div className="btnContainer--ItemCart">
                <button className="generalBtn" onClick={(data) => removeItemCart(data)}>Eliminar</button>       
                <Counter/>
            </div>
        </div>
    )
}

export default ItemCart
