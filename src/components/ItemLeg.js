/*** React ****/
import React, {useState, useContext} from 'react';

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Components ****/
import ItemPax from "../components/ItemPax";

function ItemLeg({data}) {
    const [paxLeg, setPaxLeg] = useState([]);

    function handlePaxLeg(pax) {
        let temp = paxLeg;
        temp.push(pax);
        setPaxLeg(temp);
        console.log(paxLeg);
        data.paxData = paxLeg;
        console.log(data);
    }

    let temp = data.userAmount;
    
    return (
        <div>
            <h3>Vuelo a {data.destiny}</h3>
            {
                [...Array(temp)].map((x, i) =>
                      <ItemPax paxId={i} key={i} funcPax={handlePaxLeg} />
                    )
            }
            
        </div>
    )
}

export default ItemLeg
