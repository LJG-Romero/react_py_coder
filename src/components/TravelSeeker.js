import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";

/*** Styles ****/
import './travelSeeker.css'

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


function TravelSeeker({title, origin, destiny}){
    /* State manager - List Destinies */
    const [optsDest, setOptsDest] = useState([])

    /* State manager - Counter Value */
    const [userAmount, setUserAmount] = useState(1);

    /* State manager - Inputs Value */
    const [oriName, setOrigin] = useState("");
    const [desName, setDestiny] = useState("");
    console.log(oriName)

    /* State manager - Inputs Place Holder */
    const [oriPlaceStatus, setOriPlaceStatus] = useState(true)
    const [desPlaceStatus, setDesPlaceStatus] = useState(true)

    /* State test btn rendering */
    const [btnStatus, setBtnStatus] = useState(true);

    useEffect( () => {
        fetch("https://my-json-server.typicode.com/LJG-Romero/react_py_DB/destinationsList")
        .then( (response) => response.json() )
        .then( (data) => setOptsDest(data) )
    },[])

    function capOriVal(e) {
        setOrigin(e.target.value)
        console.log(oriName)
    }
    function capDesVal(e) {
        setDestiny(e.target.value)
        console.log(desName)
    }

    function upOriPlaceStatus() {
        setOriPlaceStatus(false)
    }
    function upDesPlaceStatus() {
        setDesPlaceStatus(false)
    }

    function handleIncrease() {
        if(userAmount <= 4){
            setUserAmount(userAmount + 1);
            setBtnStatus(true);
            // console.log(btnStatus);
        }
        else if (userAmount === 5){
            alert("Alcanzaste el número máximo de pasajeros. Realiza una reserva separada !");
            setBtnStatus(false);
            // console.log(btnStatus);
        }
    }
    function handleDecrease() {
        if(userAmount > 1){
            setUserAmount(userAmount - 1);
            setBtnStatus(true);
            // console.log(btnStatus);
        }
        else if(userAmount === 1){
            alert("Ups, no podes seleccionar menos de 1 pasajero !");
            setBtnStatus(false);
        }
    }

    function onSubmit() {
        console.log(userAmount,oriName,desName)
    }
    
    return(
        <div className="mainApp__TravelSeeker">
            <h1>{title}</h1>
            <div className="travelSeeker">
                {/* <input type="text" placeholder={oriPlaceStatus? origin : undefined} value={oriName} onFocus={upOriPlaceStatus} onChange={capOriVal}/> */}
                <select name="listDest" id="" onChange={capOriVal}>
                    <option value="" disabled selected> Origen </option>
                    {optsDest.map ( (opt) => {
                        return(
                            <option value={opt.id} key={opt.id}>{opt.name}</option>
                        )
                    })
                    }
                </select>
                <input type="text" placeholder={desPlaceStatus? destiny : undefined} value={desName} onFocus={upDesPlaceStatus} onChange={capDesVal}/>
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
                <Link to="/Carrito" className="detail">
                    <button className="book" disabled={btnStatus === false} onClick={onSubmit}>Buscar</button>
                </Link>
                {/* className={btnStatus? "book" : "nada"} EJ de asignacion de atributo y clases dinamicas con condicional ternario (operador ternario)*/}
            </div>
        </div>
    );
}
export default TravelSeeker;