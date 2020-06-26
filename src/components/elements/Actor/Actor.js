import React from 'react';
import {IMAGE_BASE_URL} from '../../../config';
import './Actor.css';

const Actor = ({actor})=>{
    return (
    
            <div className = 'actors-profile' style = {{background : `url('${IMAGE_BASE_URL}w200${actor.profile_path}')` }}  >
                            {/* <p key = {i}> */}
                            {/* <img src = {`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`} alt ="movies thumb" width = '200px' height = '250px' className = 'actors-profile'/> */}
                            {/* </p> */}
                        <div className = 'actors-profile-text'> 
                        <h3 >
                            {actor.name}
                            </h3>
                             <h4>
                            Character : {actor.character}
                            </h4> 
                        </div>
                            </div>
    
    )
}
export default Actor;