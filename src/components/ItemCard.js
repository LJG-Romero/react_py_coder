import React from 'react';

/*** Styles ****/
import './itemCard.css';

function ItemCard({data}){
    return(
        <div className="itemCard">
            <div className="itemCard__Img">
                <img src={data.img} alt={`Img ${data.name}`} />
            </div>
            <div className="itemCard__Parag">
                <h3>{data.name}</h3>
                <p className="mainParag">Tiempo de vuelo: <strong>{data.time}</strong></p>
                <p className="mainParag">Aeronave: <strong>{data.acft}</strong></p>
            </div>
        </div>
    );
}

export default ItemCard;