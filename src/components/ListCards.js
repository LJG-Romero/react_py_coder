import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

/*** Styles ****/
import './listCards.css'

/*** Assets - Img ****/
import img from '../assets/Rcu1.jpeg';
import img2 from '../assets/Vmr2.jpeg';
import img3 from '../assets/Vdr1.jpeg';

// let img = img;
// let img2 = img2;
// let img3 = img3;

/*** Components ****/
import ItemCard from "./ItemCard";

function ListCards({title}){
  const [destList, setDestList] = useState([]);
  console.log(destList)
  useEffect( () => {
      fetch("https://my-json-server.typicode.com/LJG-Romero/react_py_DB/destinationsList")
        .then((response) => response.json())
        .then((data) => setDestList(data));
    },[])


    return(
        <div className="mainApp__ListCards">
            <h1>{title}</h1>
            <div className="listCards">
              {
                destList.map( (dest) => { 
                  // let temp = dest.img;
                  return(
                    <Link to={`/Detalle/${dest.id}`} className="detail">
                      <ItemCard data={dest} key={dest.id}/> 
                    </Link>
                  
                  // export default temp 
                  )} )
              }
              {/* <ItemCard
                img = {img}
                name = "Rio Cuarto"
                time = "00:45"
                acft = "Atr 72-600"
              />
              <ItemCard 
                img = {img2}
                name = "Villa María"
                time = "00:40"
                acft = "Atr 72-600"
              />
              <ItemCard 
                img = {img3}
                name = "Villa Dolores"
                time = "00:35"
                acft = "Atr 72-600"
              /> */}
            </div>
        </div>
    );
}
export default ListCards