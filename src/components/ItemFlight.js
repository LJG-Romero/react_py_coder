// import React from 'react'
import React, {useState, useContext} from 'react'

/*** Context ****/
import { StateContext } from '../StateContext'

/*** Styles ****/
import './itemFlight.css'

function ItemFlight({data}) {
    const {handlePrice,price,focus,handleFocuStatus,setIdPurch,setTest} = useContext(StateContext);
    const [select, setSelect] = useState(false);
    let temp = data.price

    function handleSelectStatus() {
        console.log(price);
        if (temp === 0){
            alert("Vuelo no disponible")
        }
        else if (focus && !select){
            alert("Elimine selección antes de continuar");
        }
        else if (focus && select){
            setSelect(!select);
            handleFocuStatus();
        }
        else{
            handlePrice(data);
            setIdPurch(data.id)
            setSelect(!select);
            handleFocuStatus();
            setTest(false);
        }
    }
    
    return (  
        <div onClick={handleSelectStatus} className={select? "selected" : "itemFlight"} >
            <p className="itemFlight__Date highlight">{data.id}</p>
            <p className="itemFlight__Price highlight">${data.price}</p>
            <p className="itemFlight__Seats highlight">Asientos remanentes {data.stock}</p>
        </div>
    )
}

export default ItemFlight