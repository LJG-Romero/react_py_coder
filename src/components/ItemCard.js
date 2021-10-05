import React from 'react';
import './itemCard.css';

function ItemCard({img, name, time, acft}){
    return(
        <div className="itemCard">
            <div className="itemCard__Img">
                <img src={img} alt="" />
                {/* <h3>{props.name}</h3> */}
            </div>
            <div className="itemCard__Parag">
                <h3>{name}</h3>
                <p className="mainParag">Tiempo de vuelo: <strong>{time}</strong></p>
                <p className="mainParag">Aeronave: <strong>{acft}</strong></p>
            </div>
        </div>
    );
}

export default ItemCard;