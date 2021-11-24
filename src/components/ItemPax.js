/*** React ****/
import React from 'react';

/*** Styles ****/
import '../views/flightPayment.css'

function ItemPax({paxId}) {
    let temp = paxId + 1;
    return (

        <div className="flightPayForm__Container">
            <h3>Pasajero {temp}</h3>
            <label htmlFor="name">Nombre y Apellido</label>
            <input type="text" name="name" placeholder="nombre apellido" className="flightPay__Input"  required />
            <label htmlFor="paxId">Documento</label>
            <input type="number" name="paxId" placeholder="xx xxx xxx" className="flightPay__Input" required />
            <label htmlFor="ph">Telefono </label>
            <input type="tel" name="ph" placeholder="cod. sin 0 y num sin 15" className="flightPay__Input"  required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email@email.com" className="flightPay__Input"  required />    
        </div> 
    )
}

export default ItemPax
