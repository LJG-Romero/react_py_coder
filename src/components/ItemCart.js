import React, {useContext} from 'react'

/*** Context ****/
import { StateContext } from '../StateContext'

/*** Styles ****/
import './itemCart.css'

/*** Components ****/
// import PurchCounters from './PurchCounters'
import Counter from './Counter'

function ItemCart({data}) {
    const {calculatePurchAmount,setIdPurch,idPurch,purchaseContainer} = useContext(StateContext)

    // console.log(data)
    // let a = data.id
    // console.log(a)
    // let b = a - 1
    // console.log(b)

    // function removeItemCart() {
    //     let trash = purchaseContainer.splice(b,1);
    //     setIdPurch(idPurch - 1)
    // }
    function removeItemCart() {
        // let idx = purchaseContainer.findIndex( (purch) => purch.origin === data.origin && purch.destiny === data.destiny && purch.userAmount === data.userAmount);

        let idx = purchaseContainer.indexOf(data);
        console.log(idx);

        let trash = purchaseContainer.splice(idx,1);
        
                let temp = data.id;
                console.log(temp);
                setIdPurch(temp - 1)
    }


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
                <p className="itemCart__Price"><strong> ${data.price}</strong></p>
                {/* <p className="itemCart__Price"><strong> ${calculatePurchAmount(data)}</strong></p> */}

            </div>
            <div className="btnContainer--ItemCart">
                <button className="generalBtn" onClick={removeItemCart}>Eliminar</button>       
                <Counter
                    goods={data}
                />
            </div>
        </div>
    )
}

export default ItemCart
