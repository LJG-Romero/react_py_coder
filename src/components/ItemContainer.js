import React from 'react';
import './itemContainer.css';

function ItemContainer(props){
    return(
        <div className="itemContainer">
            <div className="itemContainer__Img">
                <img src={props.img} alt="" />
                {/* <h3>{props.name}</h3> */}
            </div>
            <div className="itemContainer__Parag">
                <h3>{props.name}</h3>
                <p className="mainParag">Tiempo de vuelo: <strong>{props.time}</strong></p>
                <p className="mainParag">Aeronave: <strong>{props.acft}</strong></p>
            </div>
        </div>
    );
}

export default ItemContainer;