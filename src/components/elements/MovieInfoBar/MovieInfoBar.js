import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBillAlt} from '@fortawesome/free-solid-svg-icons'
import {faCoins} from '@fortawesome/free-solid-svg-icons'
import {calcTime , convertMoney} from '../../../helpers';
import './MovieInfoBar.css'
import FontAwesome from 'react-fontawesome';


const MovieInfoBar = ({runTime , budget, revenue}) => {

    
    const time = calcTime(runTime);

    const budgetMoney = convertMoney(budget);
    const revenueMoney = convertMoney(revenue);
   
     return (
         <div className= ' rmdb-movieinfobarrrr '>
             {/* <div className="rmdb-movieinfobar-content">
                 <div className = 'rmdb-movieinfobar-content-col'> */}
             <p>  <FontAwesomeIcon icon = {faClock} className = 'fa-time'/> RunTime: {time}</p> 
             <p> <FontAwesomeIcon icon = {faMoneyBillAlt} className = 'fa-budget'/>   Budget: {budgetMoney}</p>
             <p> <FontAwesomeIcon icon = {faCoins} className = 'fa-revenue'/>   Revenue: {revenueMoney}</p>
             {/* </div>
             </div> */}
         </div>
     )
}
export default MovieInfoBar ; 