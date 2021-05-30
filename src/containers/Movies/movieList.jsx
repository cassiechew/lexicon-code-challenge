import React, { useCallback, useState } from 'react';
import Movie from './movie';
import './movies.scss';
import conf from '../../config/local.json';
import { useEffect } from 'react';


/**
 * A retry solution to ensure successful API call.
 */
const fetchRetry = (url, fetchOptions) => {
    return fetch(url,fetchOptions).then(res => {
        if (!res.ok) {
            return fetchRetry(url, fetchOptions);
        }
        else {
            return res.json();
        }
    });
};

/**
 * Non-hook API connection for getting list of movies
 * 
 * @param {{method: string, headers: {string: string}}} options 
 */
export const getMovies = async (options) => {
    return await fetchRetry(conf.app.api.base+conf.app.api.cinema[0]+conf.app.api.endpoint, options).then(mres => {
        return fetchRetry(conf.app.api.base+conf.app.api.cinema[1]+conf.app.api.endpoint, options).then(fres => {
            let zipped = mres.Movies.map((e, i) => {
                return [e, fres.Movies[i]];
            });

            return zipped.map(movie => {
                return (
                    <Movie 
                        name={movie[0].Title} 
                        img={movie[0].Poster} 
                        cwldp={movie[1].Price} 
                        fwldp={movie[0].Price}
                    />
                )
            });
        });
    });
};

/**
 * Hook API connection for getting list of movie.
 */
export const useGetMovies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    const execute = async (options = {
        method: "GET",
        headers: {
            "x-api-key": conf.app.api.key,
        }
    }) => {
      try {
        setIsLoading(true);
        const movies = await getMovies(options);
        setData(movies);
        return movies;
      } catch (e) {
        setError(e);
        setIsLoading(false);
        throw e;
      }
    };

    return {
        isLoading,
        error,
        data,
        execute: useCallback(execute, []),
    };
};

/**
 * Component for the grid of movies that are available
 *  
 * @Component
 */
export default function MovieList() {
    const {
        isLoading,
        data,
        execute,
    } = useGetMovies();

    useEffect(() => {
        try {
            execute();
        } catch(e) {
            console.log(e);
        }
    }, [
        execute,
    ]);
    
    return(
        <div className="movie-list">
            {data}
        </div>
    )
}