import React from 'react';
import './movies.scss';
import MovieImage from './movieImage';
import MovieInfo from './movieInfo';

/**
 * Component for showing an individual movie.
 * 
 * @Component
 */
 export default function Movie(props) {
    return(
        <div className='movie-container'>
            <MovieImage img={props} />
            <MovieInfo info={props} />
        </div>
    )
}
