import React, {useContext} from 'react'
import { Link } from "react-router-dom";

/*** Context ****/
import { StateContext } from '../StateContext'

/*** Styles ****/
import './purchFlightSelec.css'

/*** Components ****/
import ItemFlight from '../components/ItemFlight';

function PurchFlightSelec() {
    const {offerOpts, destiny, optsDest,focus,purchaseFactory} = useContext(StateContext);

    return (
        <div className="purchFlightSelec">
            <h1>Seleccióne su vuelo a {optsDest[destiny - 1].name}</h1>
            <h3>Noviembre</h3>
            <div className="purchFlightSelec__Dates">
                <p>Lunes</p>
                <p>Martes</p>
                <p>Miércoles</p>
                <p>Jueves</p>
                <p>Viernes</p>
                <p>Sábado</p>
                <p>Domingo</p>
            </div>
            <div className="purchFlightSelec__Items">
                {
                    offerOpts.map ( (offer) => {
                        return(
                                <ItemFlight data={offer} key={offer.id} />
                        )
                    })
                }
            </div>
            <Link to="/CarritoDeVuelos">
                <button className={focus?"book":"disabled"} disabled={!focus} onClick={purchaseFactory}>Continuar</button>
            </Link>
        </div>
    )
}

export default PurchFlightSelec
