import React, {useState, createContext, useEffect} from 'react'

export const StateContext = createContext();
/* Provider model with arrow function */
// export const StateProvider = ({children}) => {

// }
export function StateProvider ({children}){

    /* State manager - Purchases Container */
    const [purchaseContainer, setPurchaseContainer] = useState([]);

    // function purchaseFactory(id,origin,destiny,paxs) {
    //     setPurchaseContainer(purchaseContainer.push

    // }


    /* State manager - Select Values */
    const [origin, setOrigin] = useState("");
    const [destiny, setDestiny] = useState("");
    
    return(
        <StateContext.Provider value={[purchaseContainer, setPurchaseContainer],[origin, setOrigin],[destiny, setDestiny]} >
            {children}
        </StateContext.Provider>
    )
}
