import React from 'react';


/**
 * Component to hold the movie information of the movie.
 * 
 * @param {*} props 
 * @returns 
 */
export default function MovieInfo(props) {
    return(
        <div className='movie-container__data'>
            <p className='movie-container__data__text'>Movie {props.name}</p>
            <p className='movie-container__data__text'>Cinemaworld $low</p> 
            <p className='movie-container__data__text'>Filmworld $high</p>
        </div>
    )
}