import React, {useContext} from "react";
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './listCards.css'

/*** Components ****/
import ItemCard from "./ItemCard";

function ListCards({title}){
  const {optsOrig} = useContext(StateContext);

    return(
        <div className="mainApp__ListCards">
            <h1>{title}</h1>
            <div className="listCards">
              {
                optsOrig.map( (dest) => {
                  return(
                    <Link to={`/Detalle/${dest.id}`} className="detail" key={dest.id}>
                      <ItemCard data={dest} /> 
                    </Link>
                  )} )
              }
            </div>
        </div>
    );
}
export default ListCards