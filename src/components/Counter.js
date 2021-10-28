import React from 'react'

/*** Styles ****/
import './counter.css'

/*** Components ****/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function Counter({state,fun1,fun2}) {
    // console.log(state);
    return (
        <div className="travelSeeker__Handlers">
            <p className="countersLabel">Adultos:</p>
            <span className="handlers" onClick={fun1}>
                <FontAwesomeIcon icon={faPlus} size='lg' />
            </span>
            <p className="countersAmount">{state}</p>
            <span className="handlers" onClick={fun2}>
                <FontAwesomeIcon icon={faMinus} size='lg' />
            </span>
        </div>
    )
}

export default Counter