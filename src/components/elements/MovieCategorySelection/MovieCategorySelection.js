import React from 'react';
import './MovieCategorySelection.css';
import { Link, Redirect } from 'react-router-dom';

const MovieCategorySelection = () =>{
   const  redirect = (param)=>  {
       window.location.href = `http://localhost:3000/MovieCategory/${param}`;

   }
    return(
       
              <div className = 'headernew'>
                <Link to = {{pathname : `/MovieCategory/top_rated`}} onClick = {()=>redirect("top_rated")}>
                <p>Top Rated</p>
                </Link>
                <Link to = {{pathname : `/MovieCategory/popular`}} onClick = {()=>redirect('popular')}>
                <p>Popular</p>
                </Link>
                <Link to = {{pathname : `/MovieCategory/now_playing`}} onClick = {redirect('now_playing')}>
                <p>Playing Now</p>
                </Link>
            </div>
        
    )

}
export default MovieCategorySelection;