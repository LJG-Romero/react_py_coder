import React, {useState} from "react";
import './travelSeeker.css'

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


function TravelSeeker({title, origin, destiny}){
    const [userAmount, setUserAmount] = useState(1);
    const [btnStatus, setBtnStatus] = useState(false);

    function handleIncrease (){
        // setUserAmount(userAmount + 1);
        if(userAmount <= 4){
            setUserAmount(userAmount + 1);
            setBtnStatus(true);
            console.log(btnStatus);
        }
        else if (userAmount === 5){
            alert("Alcanzaste el número máximo de pasajeros. Realiza una reserva separada !");
        }
    }
    function handleDecrease (){
        // setUserAmount(userAmount - 1);

        if(userAmount > 1){
            setUserAmount(userAmount - 1);
            setBtnStatus(true);
            console.log(btnStatus);

            // setUserAmount(userAmount=0); **Rompe
            // useState(0) **Rompe
        }
        else if(userAmount === 1){
            alert("Ups, no podes seleccionar menos de 1 pasajero !");
        }
    }
    

    return(
        <div className="mainApp__TravelSeeker">
            <h1>{title}</h1>
            <div className="travelSeeker">
                <input type="text" placeholder={origin} />
                <input type="text" placeholder={destiny} />
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
                <button className="book">Buscar</button>
            </div>
        </div>
    );
}
export default TravelSeeker;