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
    const [sessionSelected, setSessionSelected] = useState(null);

    console.log(sessionSelected);

    return (
        <MoviesContext.Provider value = {{movieSelected, setMovieSelected, setSessionSelected, moviesData}}>
            {props.children}
        </MoviesContext.Provider>
    );
}
