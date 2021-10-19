import React, {useState, useEffect} from "react";
import ItemCard from '../components/ItemCard';
import img from '../assets/recovery.svg'

function CitiesDitail({match}) {
    const [destDitail, setDestDitail] = useState([]);
    let cityDitail = match.params.id;
    console.log(destDitail)

    useEffect( () => {
        fetch(`https://my-json-server.typicode.com/LJG-Romero/react_py_DB/destinationsList/${cityDitail}`)
          .then((response) => response.json())
          .then((data) => setDestDitail(data));
      },[cityDitail])

    return (
        <div className="provisoryStyle--Detail">
            <div>
                <h1>Detalle</h1>
            
                <ItemCard data={destDitail}/>
            </div>
            <div className="provisory">
                <p>En Construcción</p>
                <div className="provisoryStyle__Img">
                    <img src={img} alt="En Construcción" />
                </div>
            </div>
              
        </div>
    )
}

export default CitiesDitail
