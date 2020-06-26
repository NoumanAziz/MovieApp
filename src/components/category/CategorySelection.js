import React from 'react';

import './CategorySelection.css';

let category = 'now_playing';
const CategorySelection = ({callback}) => {
    return (
        <div className = 'button-bg'>

            <button className = {category == 'now_playing'? 'btn-active':'btn-passive' }
            onClick = {() => {
                callback('now_playing') 
                category = 'now_playing'}}>Recent</button>
            <button className = {category == 'top_rated'? 'btn-active':'btn-passive' }
            onClick = {() => {
                callback('top_rated') 
                category = 'top_rated'}}>Featured</button>
            <button className = {category == 'popular'? 'btn-active':'btn-passive' }
            onClick = {() => {
                callback('popular') 
                category = 'popular'}}>Popular</button>
        </div>
    );
};

export default CategorySelection;