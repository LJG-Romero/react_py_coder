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
            // purchaseFactory,
            capOriVal,
            handleOptsDest,
            capDesVal,
            optsOrig,
            optsDest,
            handleFlightOpts,
            focus,
            destSelect
        } = useContext(StateContext);

    // class Purchase{
    //     constructor(id,ori,des,pax){
    //         this.id = id;
    //         this.ori = ori;
    //         this.des = des;
    //         this.pax = pax;
    //     }
    // }
    
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
                    // state={userAmount}
                    // fun1={handleIncrease}
                    // fun2={handleDecrease}
                />

                {/* <div className="travelSeeker__Handlers">
                    <p className="countersLabel">Adultos:</p>
                    <span className="handlers" onClick={handleIncrease}>
                        <FontAwesomeIcon icon={faPlus} size='lg' />
                    </span>
                    <p className="countersAmount">{userAmount}</p>
                    <span className="handlers" onClick={handleDecrease}>
                        <FontAwesomeIcon icon={faMinus} size='lg' />
                    </span>
                </div> */}

                <Link to="/SelecciónDeVuelos" className="detail">
                    <button className={destSelect? "book" : "disabled"} onClick={handleFlightOpts} disabled={!destSelect}>Buscar</button>
                    {/* <button className="book" onClick={purchaseFactory}>Buscar</button> */}
                </Link>

            </div>
        </div>
    );
}
export default TravelSeeker;