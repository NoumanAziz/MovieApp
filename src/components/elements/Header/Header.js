import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import Movielogo from './Movielogo.png';
import logotm from './logotm.png'


const Header =()=>{

    return(
        <div className = "rmdb-header">
            <div className = 'rmdb-header-content'>
            <Link to = "/">    
            <img className = 'rmdb-logo' src= {Movielogo} alt = 'rmdb logo'/>
            </Link>
            <img className = 'rmdb-tmdb-logo' src ={logotm} alt = 'tmdb logo'/>
            </div>
        </div>
    )
}
export default Header;



