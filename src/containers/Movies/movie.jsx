import React from 'react';
import './movies.scss';
import {app} from '../../config/local.json';
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
            <MovieImage img={app.temp.img} />
            <MovieInfo name={props.name} />
        </div>
    )
}
