import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {

    const renderElements = () =>{
        const gridElements = props.children.map((element, i)=>{
            return(
                <div key={i}  className = 'fourcolgrid-element' >
                    {element}
                </div>
            )
        })
        return gridElements;
    }

    return (
        <div className = 'fourcolgrid'>
             {/* {
                props.header && !props.loading ? <h1>{props.header}</h1> :null
             } */}
             <div className='fourcolgrid-grid'>
                {renderElements()}
             </div>
        </div>
    );
};

export default FourColGrid;