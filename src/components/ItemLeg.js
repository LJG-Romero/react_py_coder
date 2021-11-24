/*** React ****/
import React from 'react';

/*** Components ****/
import ItemPax from "../components/ItemPax";

function ItemLeg({data}) {
    let temp = data.userAmount;
    
    return (
        <div>
            <h3>Vuelo a {data.destiny}</h3>
            {
                [...Array(temp)].map((x, i) =>
                      <ItemPax paxId={i} key={i} />
                    )
            }
            
        </div>
    )
}

export default ItemLeg
