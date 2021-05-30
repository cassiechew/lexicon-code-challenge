import React from 'react';


/**
 * Component to hold the movie information of the movie.
 * 
 * @Component
 * @param {*} props 
 */
export default function MovieInfo(props) {
    return(
        <div className='movie-container__data'>
            <p className='movie-container__data__text'>Movie {props.info.name}</p>
            <p className='movie-container__data__text'>Cinemaworld ${props.info.cwldp}</p> 
            <p className='movie-container__data__text'>Filmworld ${props.info.fwldp}</p>
        </div>
    )
}