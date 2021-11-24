import React, {useState, useContext} from 'react'

/*** Context ****/
import { StateContext } from '../StateContext'

/*** Styles ****/
import './itemCart.css'

/*** Components ****/
import Counter from './Counter'

function ItemCart({data}) {
    const {setIdPurch,purchaseContainer} = useContext(StateContext)
    const [updater, setUpdater] = useState(false);

    function handleUpdater() {
        setUpdater(!updater);
    }

    function removeItemCart() {

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
                <p className="itemCart__L">Salida:</p>
                <p className="itemCart__L">Pasajeros:</p>
                <p className="itemCart__L">Precio:</p>
            </div>
            <div className="itemCart__Data">
                <p className="itemCart__P"><strong> {data.origin}</strong></p>
                <p className="itemCart__P"><strong> {data.destiny}</strong></p>
                <p className="itemCart__P"><strong>Noviembre  {data.id}</strong></p>
                <p className="itemCart__P"><strong>{data.userAmount}</strong></p>
                <p className="itemCart__Price"><strong> ${data.price}</strong></p>

            </div>
            <div className="btnContainer--ItemCart">
                <button className="generalBtn" onClick={removeItemCart}>Eliminar</button>       
                <Counter
                    goods={data} updaterKey={handleUpdater}
                />
            </div>
        </div>
    )
}

export default ItemCart
