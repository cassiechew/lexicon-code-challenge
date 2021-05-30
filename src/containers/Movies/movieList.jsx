import React from 'react';
import Movie from './movie';
import './movies.scss';


/**
 * Component for the grid of movies that are available
 *  
 * @Component
 */
export default function MovieList() {
    return(
        <div className="movie-list">
            <Movie name="test"/>
            <Movie name="test"/>
            <Movie name="test"/>
            <Movie name="test"/>
            <Movie name="test"/>
            <Movie name="test"/>
            <Movie name="test"/>
            <Movie name="test"/>
        </div>
    )
}