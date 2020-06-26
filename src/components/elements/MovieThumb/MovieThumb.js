import React from 'react';
import './MovieThumb.css';
import {Link} from 'react-router-dom'
const MovieThumb = (props) => {
    console.log('propssss',props)
    return (
        <div className='rmdb-moviethumb'>
            <Link to = {{pathname: `/movie/${props.movieId}`, moviename:`${props.movieName}`}}>
            <img src = {props.image} alt ="movies thumb" />
            </Link>
            </div>
    );
};

export default MovieThumb;



