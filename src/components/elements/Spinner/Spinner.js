import React from 'react';
import './Spinner.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
const Spinner =(props)=>{
    return(
         
            <div  className = 'spin'>
            <FontAwesomeIcon icon = {faSpinner} pulse size = '4x'/>
            </div>
        
    )

}
export default Spinner