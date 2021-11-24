import React, {useContext} from "react";
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './travelSeeker.css'

/*** Components ****/
import Counter from "./Counter";

function TravelSeeker({title}){
    const {
            capOriVal,
            handleOptsDest,
            capDesVal,
            optsOrig,
            optsDest,
            handleFlightOpts,
            focus,
            destSelect
        } = useContext(StateContext);
    
    return(
        <div className="mainApp__TravelSeeker">
            <h1>{title}</h1>
            <div className="travelSeeker">
                
                <select name="listOrig" id="" onChange={capOriVal}>
                    <option value="" disabled selected> Origen </option>
                    {
                        optsOrig.map ( (opt) => {
                            return(
                                <option value={opt.id} key={opt.id}>{opt.name}</option>
                            )
                        })
                    }
                </select>

                <select name="listDest" id="" onFocus={handleOptsDest} onChange={capDesVal}>
                    <option value="" disabled selected> Destino </option>
                    {
                        optsDest.map ( (opt2) => {
                            return(
                                <option value={opt2.id} key={opt2.id}>{opt2.name}</option>
                            )
                        })
                    }
                </select>

                <Counter
                    goods={{}}
                />

                <Link to="/SelecciónDeVuelos" className="detail">
                    <button className={destSelect? "book" : "disabled"} onClick={handleFlightOpts} disabled={!destSelect}>Buscar</button>
                </Link>

            </div>
        </div>
    );
}
export default TravelSeeker;