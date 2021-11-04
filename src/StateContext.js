import React, {useState, createContext, useEffect} from 'react';

export const StateContext = createContext();

/* Provider model with arrow function */
export const StateProvider = ({children}) => {
    /* State manager - Array purchases */
    const [purchaseContainer, setPurchaseContainer] = useState([]);
    
    /* State manager - Select Values */
    const [origin, setOrigin] = useState("");
    const [destiny, setDestiny] = useState("");

    /* State manager - List Destinies */
    const [optsOrig, setOptsOrig] = useState([]);
    const [optsDest, setOptsDest] = useState([]);

    /* State manager - Counter Value */
    const [userAmount, setUserAmount] = useState(1);

    const [offerOpts, setOfferOpts] = useState([]);

    const [focus, setFocus] = useState(false);

    const [price, setPrice] = useState("$0");

    const [idPurch, setIdPurch] = useState(0);

    // let identifier = 0;

    useEffect( () => {
        fetch("https://my-json-server.typicode.com/LJG-Romero/react_py_DB/destinationsList")
        .then( (response) => response.json() )
        .then( (data) => setOptsOrig(data) )
    },[]);

    function capOriVal(e) {
        // let temp = e.target.value;
        /*Opt1*/
        // setOrigin(optsOrig[temp-1].name)

        /*Opt2*/
        // const temp1 = optsOrig.find(obj => obj.id === temp)
        // setOrigin(temp1.name)

        setOrigin(e.target.value)
    }
    function capDesVal(e) {
        setDestiny(e.target.value)
    }

    function handleOptsDest(){
        origin !== "" && 
        setOptsDest(optsOrig[origin - 1].routesList);
    }

    function purchaseFactory() {
        // let ref = purchaseContainer.length;
        // purchaseContainer.push(new Purchase(ref,origin,destiny,userAmount));
        // setPurchaseContainer(purchaseContainer);   
        // console.log(purchaseContainer)
        // identifier ++;
        let temp1 = idPurch
        temp1++
        setIdPurch(temp1)
        setFocus(false)
        setOptsDest([])
        setOrigin("")

        let newPurchase = {
            id: temp1,
            origin: optsOrig[origin - 1].name,
            destiny: optsDest[destiny - 1].name,
            price: price,
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
    // function handleSelectStatus(e) {
    //     e.target.classList.add("selected");

    //     setSelect(!select);
    // }

    function handlePrice(db) {
        // if (price === "$0"){
        //     alert("Vuelo no disponible")
        // }
        // else{
        //     setPrice(db.price)
        //     console.log(price)
        // }
        setPrice(db.price)
        console.log(price)
        // setPrice(e.target.innerHTML);
    }
    function removeItemCart(db) {
        // console.log(vari)
        console.log(db.id)
        // let temp = vari - 1;
        let temp = db.id - 1;

        let temp1 = purchaseContainer.splice(temp,1);
        setIdPurch(idPurch - 1)
    }
    function calculatePurchAmount(db) {
        return db.price * db.userAmount
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
                purchaseFactory,
                capOriVal,
                handleOptsDest,
                capDesVal,
                handleIncrease,
                handleDecrease,
                handlePurchaseContainer,
                handleFlightOpts,
                handlePrice,
                handleFocuStatus,
                removeItemCart,
                // setIdPurch,
                calculatePurchAmount
                
            }
        }>
            {children}
        </StateContext.Provider>
    )

}
/* Provider model with common function */
// export function StateProvider ({children}){

//     /* State manager - Purchases Container */
//     const [purchaseContainer, setPurchaseContainer] = useState([]);
//     console.log(purchaseContainer)

//     /* State manager - Select Values */
//     const [origin, setOrigin] = useState("");
//     const [destiny, setDestiny] = useState("");
//     console.log(origin)
//     console.log(destiny)

//     return(
//         <StateContext.Provider value={[purchaseContainer,setPurchaseContainer],[origin,setOrigin],[destiny,setDestiny]} >
//         {/* <StateContext.Provider value={[purchaseContainer,setPurchaseContainer]} > */}

//             {children}
//         </StateContext.Provider>
//     )
// }
