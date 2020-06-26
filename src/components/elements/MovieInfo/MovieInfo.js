import React from 'react';
import {IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
import Navigation from '../Navigation/Navigation';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  // Animation
  import { easeQuadInOut } from "d3-ease";
  import AnimatedProgressProvider from "./AnimatedProgressProvider";
  import ChangingProgressProvider from "./ChangingProgressProvider";
  
  // Radial separators
  import RadialSeparators from "./RadialSeparators";

 const MovieInfo = (props)=>{
    //  const director = props.directors.map(i=>i.name);
    //  console.log('directorssss',director);


    return(
        <div className = 'rmdb-movieinfo'
        style = {{ background : props.movie.backdrop_path? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')`: '#0000'}}>
            <Navigation  className = 'navigationbar' movieName = {props.movie.title}/>
            
            <div className  = 'rmdb-movieinfo-content'>
                <div className = 'rmdb-movieinfo-thumb'>
                <MovieThumb 
                        
                        clickable = {false}
                        image = {props.movie.poster_path? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}`: './images/no_image.jpg'}
                        movieId = {props.movie.id}
                        movieName = {props.movie.original_title}/>
             
                </div>
                <div className = 'rmdb-movieinfo-text'>
                    <h1>
                        {props.movie.title}
                    </h1>
                    <div className = "movie-plot">
                    <h3>Plot</h3>
                    <p className = 'full-plot'>{props.movie.overview}</p>
                    <p className = 'half-plot'>{props.movie.overview.substring(0,170)}</p>
                   </div>
                   <div className="above-top">
                    <div className = 'imdb-div'>
                    <h3 >IMDB Rating</h3>
                    <div  className = 'circle-bar'>
                    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={props.movie.vote_average *10}
        duration={1.4}
        easingFunction={easeQuadInOut}
        
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              strokeWidth = {11} 
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ pathTransition: "none" ,
                     pathColor: `rgba(255, 230, 1, 0.457)`,
                textColor: 'white',
                trailColor: 'rgba(202, 201, 201, 0.26)',
               
            
                                    })}
                                    />
                                );
                                }}
                            </AnimatedProgressProvider>
                            </div>
                            </div>


                        <div className = 'director-div'>
                        <div>{props.directors.lenght > 1? <h3>Directors</h3> : <h3>Director</h3>}</div>
                        <div>
                         {props.directors.map((director,i)=>{
                         return (
                         <h5 key = {i} >{director.name}</h5>
                         )
                        })}
                    </div>
                        </div>
                    
                        </div>
                        
                </div>

            </div>
            <div >
                <MovieInfoBar runTime = {props.movie.runtime} budget = {props.movie.budget} revenue={props.movie.revenue}/>
            </div>
        </div>
    )
 }
export default MovieInfo;
// movieName = {this.state.movie.title} plot = {this.state.movie.overview} 
//                            rating = {this.state.movie.vote_average}