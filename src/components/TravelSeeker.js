import React, {useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './travelSeeker.css'

/*** Components ****/
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { faMinus } from '@fortawesome/free-solid-svg-icons';
import Counter from "./Counter";

function TravelSeeker({title}){
    const {purchaseContainer, setPurchaseContainer, origin, setOrigin,destiny, setDestiny} = useContext(StateContext);
    console.log(purchaseContainer)
    console.log(origin)
    console.log(destiny)

    // let identifier = 0;

    // class Purchase{
    //     constructor(id,ori,des,pax){
    //         this.id = id;
    //         this.ori = ori;
    //         this.des = des;
    //         this.pax = pax;
    //     }
    // }

    function purchaseFactory() {
        // let ref = purchaseContainer.length;
        // purchaseContainer.push(new Purchase(ref,origin,destiny,userAmount));
        // setPurchaseContainer(purchaseContainer);   
        // console.log(purchaseContainer)

        let newPurchase = {
            // id: identifier ++,
            origin: origin,
            destiny: destiny,
            userAmount: userAmount
        }

        let temp = [];
        temp.push(newPurchase)
        const newPurchaseContainer = purchaseContainer.concat(temp);
        setPurchaseContainer(newPurchaseContainer);
        console.log(purchaseContainer)

        // setPurchaseContainer(purchaseContainer.push(newPurchase))
        // console.log(newPurchase)
        // console.log(purchaseContainer)
    }

    /* State manager - List Destinies */
    const [optsOrig, setOptsOrig] = useState([])
    const [optsDest, setOptsDest] = useState([])

    /* State manager - Counter Value */
    const [userAmount, setUserAmount] = useState(1);

    /* State manager - Select Values */
    // const [origin, setOrigin] = useState("");
    // const [destiny, setDestiny] = useState("");
    // console.log(origin)
    // console.log(destiny)


    useEffect( () => {
        fetch("https://my-json-server.typicode.com/LJG-Romero/react_py_DB/destinationsList")
        .then( (response) => response.json() )
        .then( (data) => setOptsOrig(data) )
    },[])

    function capOriVal(e) {
        setOrigin(e.target.value)
    }
    function capDesVal(e) {
        setDestiny(e.target.value)
    }

    function handleOptsDest(){
        origin != "" && 
        setOptsDest(optsOrig[origin - 1].routesList);
    }

    function handleIncrease() {
        if(userAmount <= 4){
            setUserAmount(userAmount + 1);
        }
        else if (userAmount === 5){
            alert("Alcanzaste el número máximo de pasajeros. Realiza una reserva separada !");
        }
    }
    function handleDecrease() {
        if(userAmount > 1){
            setUserAmount(userAmount - 1);
        }
        else if(userAmount === 1){
            alert("Ups, no podes seleccionar menos de 1 pasajero !");
        }
    }
    
    return(
        <div className="mainApp__TravelSeeker">
            <h1>{title}</h1>
            <div className="travelSeeker">
                
                <select name="listOrig" id="" onChange={capOriVal}>
                    <option value="" disabled selected> Origen </option>
                    {
                        optsOrig.map ( (opt) => {
                            return(
                                <option value={opt.id} key={opt.id}>{opt.name}</option>
                            )
                        })
                    }
                </select>

                <select name="listDest" id="" onFocus={handleOptsDest} onChange={capDesVal}>
                    <option value="" disabled selected> Destino </option>
                    {
                        optsDest.map ( (opt2) => {
                            return(
                                <option value={opt2.id} key={opt2.id}>{opt2.name}</option>
                            )
                        })
                    }
                </select>

                <Counter
                    state={userAmount}
                    fun1={handleIncrease}
                    fun2={handleDecrease}
                />

                {/* <div className="travelSeeker__Handlers">
                    <p className="countersLabel">Adultos:</p>
                    <span className="handlers" onClick={handleIncrease}>
                        <FontAwesomeIcon icon={faPlus} size='lg' />
                    </span>
                    <p className="countersAmount">{userAmount}</p>
                    <span className="handlers" onClick={handleDecrease}>
                        <FontAwesomeIcon icon={faMinus} size='lg' />
                    </span>
                </div> */}

                <Link to="/Carrito" className="detail">
                    <button className="book" onClick={purchaseFactory}>Buscar</button>
                </Link>

            </div>
        </div>
    );
}
export default TravelSeeker;