import React from 'react';
import MovieCategorySelection from '../elements/MovieCategorySelection/MovieCategorySelection';
import './CategorySelection.css';
import {Link} from 'react-router-dom'
let category = 'now_playing';
const CategorySelection = () => {
    return (
        <div className = 'button-bg'>
            <Link to = {{pathname : `/MovieCategory/:now_playing`}}>
            <button className = {category == 'now_playing'? 'btn-active':'btn-passive' }
            onClick = {() => {
                category = 'now_playing'}}>Now Playing</button>
                </Link>
                <Link to = {{pathname : `/MovieCategory/:top_rated`}}>
            <button className = {category == 'top_rated'? 'btn-active':'btn-passive' }
            onClick = {() => {
            
                category = 'top_rated'}}>Top Rated</button>
                </Link>
                <Link to = {{pathname : `/MovieCategory/:popular`}}>
            <button className = {category == 'popular'? 'btn-active':'btn-passive' }
            onClick = {() => {
               
                category = 'popular'}}>Popular</button>
                </Link>
        </div>
    );
};

export default CategorySelection;