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
    const [dateSelected, setDateSelected] = useState(null);
    const [sessionSelected, setSessionSelected] = useState(null);
    const [numberSeatsSelected, setNumberSeatsSelected] = useState([]);
    const [IdSeatsSelected, setIdSeatsSelected] = useState({ids: []});


    return (
        <MoviesContext.Provider value = {{movieSelected, setMovieSelected, sessionSelected, setSessionSelected, 
            dateSelected, setDateSelected, numberSeatsSelected, setNumberSeatsSelected, IdSeatsSelected, setIdSeatsSelected, moviesData}}>

              {props.children}
        </MoviesContext.Provider>
    );
}
