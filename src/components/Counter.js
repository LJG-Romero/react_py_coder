import React, {useContext} from "react";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './counter.css'

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


function Counter() {

    const {userAmount, handleIncrease, handleDecrease} = useContext(StateContext);


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
            <span className="handlers" onClick={handleIncrease}>
                <FontAwesomeIcon icon={faPlus} size='lg' />
            </span>
            <p className="countersAmount">{userAmount}</p>
            <span className="handlers" onClick={handleDecrease}>
                <FontAwesomeIcon icon={faMinus} size='lg' />
            </span>
        </div>
    )
}

export default Counter