import React, {useState,useContext} from 'react'

/*** Context ****/
import { StateContext } from "../StateContext";

/*** Styles ****/
import './counter.css'

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function PurchCounters({goods}) {

    const [purchAmount, setPurchAmount] = useState(goods.userAmount)

    

    return (
        <div className="travelSeeker__Handlers">
            <p className="countersLabel">Adultos:</p>
            <span className="handlers" onClick={handleIncrease}>
                <FontAwesomeIcon icon={faPlus} size='lg' />
            </span>

            <p className="countersAmount">{purchAmount}</p>

            <span className="handlers" onClick={handleDecrease}>
                <FontAwesomeIcon icon={faMinus} size='lg' />
            </span>
        </div>
    )
}

export default PurchCounters
