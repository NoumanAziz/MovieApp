import React from 'react';
import './LoadMoreBtn.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons'
const LoadMoreBtn = ({onLoad}) => {
    return (
        <div className = 'rmdb-loadmorebtn' onClick={()=>onLoad(true)} >
           {/* <p>{props.text}</p>  */}
          <FontAwesomeIcon icon = {faAngleDoubleDown}  size = '3x' className = 'loader'/>
       
        </div>
    );
};

export default LoadMoreBtn;