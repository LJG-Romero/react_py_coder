/*** React ****/
import React, {useState, createContext, useEffect} from 'react';

/*** Firebase ****/
import { collection, getDocs } from "firebase/firestore"
import {db} from "./firebase/firebaseConfig"

export const StateContext = createContext();

/* Provider model with arrow function */
export const StateProvider = ({children}) => {
    /* State manager - Array Purchases */
    const [purchaseContainer, setPurchaseContainer] = useState([]);
    
    /* State manager - Select Values */
    const [origin, setOrigin] = useState("");
    const [destiny, setDestiny] = useState("");

    /* State manager - List Destinies */
    const [optsOrig, setOptsOrig] = useState([]);
    const [optsDest, setOptsDest] = useState([]);

    /* State manager - Counter Manager */
    const [userAmount, setUserAmount] = useState(1);
    const [counterStatus, setCounterStatus] = useState(false);

    /* State manager - Offer List */
    const [offerOpts, setOfferOpts] = useState([]);

    /* State manager - Flight Select Manager */
    const [focus, setFocus] = useState(false);
    const [destSelect, setDestSelect] = useState(false);

    /* State manager - Purch Factory */
    const [price, setPrice] = useState("$0");
    const [idPurch, setIdPurch] = useState(0);

    /* State manager - Id Confirm */
    const [idConfirm, setIdConfirm] = useState("")

    /* State Test */
    const [test, setTest] = useState(true);
    console.log(test);
    console.log(focus);

    useEffect( () => {

        const dataPetition = async () => {
            const temp = [];
            const query = collection(db, 'destinationsList');
            const response = await getDocs(query);
            response.forEach( (dest) => {
                temp.push(dest.data());
            } )
            // let temp = response.data();
            console.log(temp);
            setOptsOrig(temp);
        }
        dataPetition();

    },[] )

    function capOriVal(e) {
        setOrigin(e.target.value)
    }
    function capDesVal(e) {
        setDestiny(e.target.value)
        setDestSelect(true)
    }

    function handleOptsDest(){
        origin !== "" && 
        setOptsDest(optsOrig[origin - 1].routesList);
    }

    function purchaseFactory() {
        
        let newPurchase = {
            id: idPurch,
            origin: optsOrig[origin - 1].name,
            destiny: optsDest[destiny - 1].name,
            price: price * userAmount,
            userAmount: userAmount
        }

        let temp = [];
        temp.push(newPurchase)
        const newPurchaseContainer = purchaseContainer.concat(temp);
        setPurchaseContainer(newPurchaseContainer);
        console.log(purchaseContainer)
        
        setOptsDest([]);
        setOrigin("");
        setUserAmount(1);
        setDestSelect(false);
        setFocus(false);
        setCounterStatus(true);
    }

    function handlePurchaseContainer() {
        setPurchaseContainer([]);
        setIdPurch(0);
        console.log(purchaseContainer);
    }

    function handleFlightOpts() {
        setOfferOpts(optsDest[destiny - 1].offer);
    }

    function handleFocuStatus() {
        setFocus(!focus);
    }

    function handlePrice(db) {
        setPrice(db.price)
        console.log(price)
    }
    
    function calculatePurchAmount(db) {
        return db.price * db.userAmount
    }
    function handleReset() {
        setFocus(false);
        setDestSelect(false);
    }

    function updatePurch(obj,a) {
        let idx = purchaseContainer.indexOf(obj);
        console.log(idx);
        let temp = purchaseContainer;
        temp[idx].price = price * a;
        temp[idx].userAmount = a;
        console.log(temp[idx]);
        console.log(temp);
        setPurchaseContainer(temp);
        
    }
    

    return(
        <StateContext.Provider value={
            {
                optsOrig,
                optsDest,
                userAmount,
                purchaseContainer,
                destiny,
                offerOpts,
                price,
                focus,
                idPurch,
                destSelect,
                purchaseFactory,
                capOriVal,
                handleOptsDest,
                capDesVal,
                handlePurchaseContainer,
                handleFlightOpts,
                handlePrice,
                handleFocuStatus,
                setIdPurch,
                calculatePurchAmount,
                setFocus,
                setTest,
                test,
                handleReset,
                setDestSelect,
                counterStatus,
                setCounterStatus,
                setUserAmount,
                setPurchaseContainer,
                updatePurch,
                idConfirm,
                setIdConfirm
                
            }
        }>
            {children}
        </StateContext.Provider>
    )
}