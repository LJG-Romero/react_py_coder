// import React from 'react'
import React, {useState, useContext} from 'react'

/*** Context ****/
import { StateContext } from '../StateContext'

/*** Styles ****/
import './itemFlight.css'

function ItemFlight({data}) {
    const {handlePrice,price,focus,handleFocuStatus,setIdPurch} = useContext(StateContext);
    const [select, setSelect] = useState(false);
    let temp = data.price

    function handleSelectStatus() {
        // handlePrice(data);
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
        }
    }
    // function handleSelectStatus() {
    //     handlePrice(data);
    //     console.log(price);
    //     if (price !== "$0"){
    //         if (focus && !select){
    //             alert("Elimine selección antes de continuar");
    //         }
    //         else if (focus && select){
    //             setSelect(!select);
    //             handleFocuStatus();
    //         }
    //         else{
    //             setSelect(!select);
    //             handleFocuStatus();
    //         }
    //     }
    //     else{
    //         alert("Vuelo no disponible")
    //     }
    // }
    
    // function handleEmpty() {
    //     if (temp === 0){
    //         alert("Vuelo no disponible")
    //     }
    // }
    
    return (  
        <div onClick={handleSelectStatus} className={select? "selected" : "itemFlight"} >
            <p className="itemFlight__Date highlight">{data.id}</p>
            <p className="itemFlight__Price highlight">${data.price}</p>
            <p className="itemFlight__Seats highlight">Asientos remanentes {data.stock}</p>
        </div>
    )
}

export default ItemFlight


// function ItemFlight({data}) {
//     const {handlePrice,select,handleSelectStatus} = useContext(StateContext);
//     let temp = data.price
//     return (        
//         <div onClick={handleSelectStatus} className={select? "itemFlight selected" : "itemFlight"}>
//             <p className="itemFlight__Date highlight">{data.id}</p>
//             <p className="itemFlight__Price highlight" onClick={handlePrice}>{data.price}</p>
//             <p className="itemFlight__Seats highlight">Asientos remanentes {data.stock}</p>
//         </div>
//     )
// }


// return (  
//     {if (renderE){
//             <div onClick={handleSelectStatus} className={select? "selected" : "itemFlight"}>
//                 <p className="itemFlight__Date highlight">{data.id}</p>
//                 <p className="itemFlight__Price highlight">{data.price}</p>
//                 <p className="itemFlight__Seats highlight">Asientos remanentes {data.stock}</p>
//             </div>
//         }
//     else{
//             <div className="itemFlight">
//                 <p className="itemFlight__Date highlight">{data.id}</p>
//                 <p className="itemFlight__Price highlight">{data.price}</p>
//                 <p className="itemFlight__Seats highlight">Asientos remanentes {data.stock}</p>
//             </div>
//         }
//     }
// )