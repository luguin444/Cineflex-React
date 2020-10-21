import React, { createContext, useEffect, useState} from 'react'
import axios from 'axios'

const MoviesContext = createContext();

export default MoviesContext;

export function MoviesProvider (props) {

    const [moviesData, setMoviesData] = useState([]);

    useEffect( () => {

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies");

        request.then( response => {
            setMoviesData(response.data);
        });
    },[]);

    const [movieSelected, setMovieSelected] = useState(null);

    return (
        <MoviesContext.Provider value = {{movieSelected, setMovieSelected, moviesData}}>
            {props.children}
        </MoviesContext.Provider>
    );
}
