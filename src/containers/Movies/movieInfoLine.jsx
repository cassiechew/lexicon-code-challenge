import React from 'react';


/**
 * Component to hold the movie information.
 * 
 * @Component
 * @param {*} props 
 */
export default function MovieInfoLine(props) {
    return(
        <p className='movie-container__data__text'>{props.text}</p>
    )
}