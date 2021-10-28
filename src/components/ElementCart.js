import React from 'react'

/*** Styles ****/
import './elementCart.css'

function ElementCart({data}) {
    return (
        <div className="elementCart" >
            <div className="elementCart__Data">
                <p>Origen: {data.origin}</p>
                <p>Destino: {data.destiny} </p>
                <p>Cantidad de pasajeros: {data.userAmount} </p>
                <p>Precio: $1500 (Transitory Mock Data)</p>
            </div>
            <button className="book" >Eliminar</button>       
        </div>
    )
}

export default ElementCart
