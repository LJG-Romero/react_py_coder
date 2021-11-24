import React, {useState, useContext} from "react";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './counter.css'

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


function Counter({goods, updaterKey}) {

    const {userAmount, counterStatus, setUserAmount, updatePurch, calculatePurchAmount} = useContext(StateContext);

    const [purchAmount, setPurchAmount] = useState(goods.userAmount);

    // const [purchAmount, setPurchAmount] = useState(counterStatus? goods.userAmount : 1);

    function handleIncrease() {
        if (counterStatus) {
            if(purchAmount <= 4){
                setPurchAmount(purchAmount + 1);
                console.log(purchAmount)
                let aux = purchAmount + 1;
                updatePurch(goods,aux);
                updaterKey();
                calculatePurchAmount();
            }
            else if (purchAmount === 5){
                alert("Alcanzaste el número máximo de pasajeros. Realiza una reserva separada !");
            }
        }
        else{
            if(userAmount <= 4){
                setUserAmount(userAmount + 1);
                console.log(userAmount)
            }
            else if (userAmount === 5){
                alert("Alcanzaste el número máximo de pasajeros. Realiza una reserva separada !");
            }
        }
    }
    function handleDecrease() {
        if (counterStatus) {
            if(purchAmount > 1){
                setPurchAmount(purchAmount - 1);
                console.log(purchAmount)
                let aux = purchAmount - 1;
                updatePurch(goods,aux);
                updaterKey();
                calculatePurchAmount();
            }
            else if (purchAmount === 1){
                alert("Ups, no podes seleccionar menos de 1 pasajero !");            }
        }
        else{
            if(userAmount > 1){
                setUserAmount(userAmount - 1);
                console.log(userAmount)
            }
            else if (userAmount === 1){
                alert("Ups, no podes seleccionar menos de 1 pasajero !");            }
        }
    }

    return (
        <div className="travelSeeker__Handlers">
            <p className="countersLabel">Adultos:</p>

            <span className="handlers" onClick={handleIncrease}>
                <FontAwesomeIcon icon={faPlus} size='lg' />
            </span>

            <p className="countersAmount">{counterStatus? purchAmount : userAmount}</p>

            <span className="handlers" onClick={handleDecrease}>
                <FontAwesomeIcon icon={faMinus} size='lg' />
            </span>
        </div>
    )
}

export default Counter