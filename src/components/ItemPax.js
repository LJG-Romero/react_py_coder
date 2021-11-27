/*** React ****/
import React, {useState, useContext} from 'react';

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import '../views/flightPayment.css'

function ItemPax({paxId, funcPax}) {
    const [paxObj, setPaxObj] = useState({});

    let temp = paxId + 1;

    function test(e) {
        // console.log(e.target.name);
        // console.log(e.target.value);
        let key = e.target.name;
        let value = e.target.value
        let temp = paxObj;
        temp = {...paxObj, [key] : value};
        console.log(temp);
        setPaxObj(temp);
        console.log(paxObj);
    }
    function test2() {
        funcPax(paxObj);
    }
    return (

        <div className="flightPayForm__Container">

            <h3>Pasajero {temp}</h3>

            <label htmlFor="name">Nombre y Apellido</label>
            <input type="text" name="name" placeholder="nombre apellido" className="flightPay__Input"  required onChange={test} />

            <label htmlFor="paxId">Documento</label>
            <input type="number" name="paxId" placeholder="xx xxx xxx" className="flightPay__Input" required onChange={test} />

            <label htmlFor="ph">Telefono </label>
            <input type="tel" name="ph" placeholder="cod. sin 0 y num sin 15" className="flightPay__Input"  required onChange={test} />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email@email.com" className="flightPay__Input"  required onChange={test} onBlur={test2} />  

        </div> 
    )
}

export default ItemPax
