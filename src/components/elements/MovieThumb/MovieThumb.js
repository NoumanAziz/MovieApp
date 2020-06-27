import React from 'react';
import './MovieThumb.css';
import {Link} from 'react-router-dom'
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

const MovieThumb = ({movieId , movieName , image ,rating , clickable}) => {

    return (
       <> 
       {clickable ? 
        <div className="showthumb" 
      style = {{background : `linear-gradient(to bottom , rgba(0,0,0,0.7)
            39% , rgba(0,0,0,0.7)
            41%, rgba(0,0,0,0.7)
            100% , rgba(0,0,0,0.7) ), 
            url('${image}'), #1c1c1c `}}>
        <div>   
<Link style = {{textDecoration:'none'}}  to={{pathname : `/movie/${movieId}` , movieName : `${movieName}`}}>
            <div className="cont">
                  <h4>{movieName}</h4>
                {/* <p>Release Data</p>
                <p>{props.air_date}</p> */}
              
              <div  className = 'circle-bar'>
                    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={rating *10}
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
                  
                  </Link>  
          <img  src={image} alt={movieId}/>  
          </div>
        </div>: 
        <div className = 'rmdb-moviethumb'>
                 <img src = {image} alt ="movies thumb"/> 
                </div>
                }</>

    );
};

export default MovieThumb;


{/* <img src = {props.image} alt ="movies thumb" /> */}
