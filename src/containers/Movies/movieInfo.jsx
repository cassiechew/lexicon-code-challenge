import React from 'react';
import MovieInfoLine from './movieInfoLine';

/**
 * Component to hold the movie information.
 * 
 * @Component
 * @param {*} props 
 */
export default function MovieInfo(props) {
    return(
        <div className='movie-container__data'>
            <MovieInfoLine text={"Movie "+props.info.name} />
            <MovieInfoLine text={"Cinemaworld $"+props.info.cwldp} />
            <MovieInfoLine text={"Filmworld $"+props.info.fwldp} />
        </div>
    )
}