import React, {useState, useContext} from "react";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './counter.css'

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


function Counter({goods}) {

    const {userAmount, handleIncrease, handleDecrease, counterStatus, setUserAmount} = useContext(StateContext);
    const [purchAmount, setPurchAmount] = useState(0);
    let amount = 0;
    let fun = null;
    if (counterStatus){
        setPurchAmount(goods.userAmount);
        fun = setPurchAmount;
        amount = purchAmount;
    }
    else{
        fun = setUserAmount
        amount = userAmount
    }
    console.log(amount);
    console.log(fun);

    // function handleIncrease(a,func) {
    //     if(a <= 4){
    //         func(a + 1);
    //     }
    //     else if (a === 5){
    //         alert("Alcanzaste el número máximo de pasajeros. Realiza una reserva separada !");
    //     }
    // }
    // function handleDecrease(b,func) {
    //     if(b > 1){
    //         func(b - 1);
    //     }
    //     else if(b === 1){
    //         alert("Ups, no podes seleccionar menos de 1 pasajero !");
    //     }
    // }


    /* State manager - Counter Value */
    // const [userAmount, setUserAmount] = useState(1);

    // function handleIncrease() {
    //     if(userAmount <= 4){
    //         setUserAmount(userAmount + 1);
    //     }
    //     else if (userAmount === 5){
    //         alert("Alcanzaste el número máximo de pasajeros. Realiza una reserva separada !");
    //     }
    // }
    // function handleDecrease() {
    //     if(userAmount > 1){
    //         setUserAmount(userAmount - 1);
    //     }
    //     else if(userAmount === 1){
    //         alert("Ups, no podes seleccionar menos de 1 pasajero !");
    //     }
    // }



    return (
        <div className="travelSeeker__Handlers">
            <p className="countersLabel">Adultos:</p>
            <span className="handlers" onClick={()=>{handleIncrease(amount, fun)}}>
            {/* <span className="handlers" onClick={fun1}> */}

                <FontAwesomeIcon icon={faPlus} size='lg' />
            </span>
            <p className="countersAmount">{amount}</p>
            {/* <p className="countersAmount">{state}</p> */}

            <span className="handlers" onClick={()=>{handleDecrease(amount, fun)}}>
            {/* <span className="handlers" onClick={fun2}> */}

                <FontAwesomeIcon icon={faMinus} size='lg' />
            </span>
        </div>
    )
}

export default Counter