import React from 'react';

/**
 * Component to hold the image of the Movie.
 * 
 * @param   {{img: string}} props     Passed in props of the component         
 */
export default function MovieImage(props) {
    return(
        <div className='movie-container__img'>
            <img src={props.img} alt="" className="movie-container__img--prop" />
        </div>
    )
}