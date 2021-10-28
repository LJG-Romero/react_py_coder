import React, {useState, createContext, useEffect} from 'react'

export const StateContext = createContext();

/* Provider model with arrow function */
export const StateProvider = ({children}) => {
    const [purchaseContainer, setPurchaseContainer] = useState([]);
    
    const [origin, setOrigin] = useState("");
    const [destiny, setDestiny] = useState("");

    // console.log(purchaseContainer)
    // console.log(origin)
    // console.log(destiny)

    return(
        <StateContext.Provider value={{purchaseContainer,setPurchaseContainer,origin,setOrigin,destiny,setDestiny}} >
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
