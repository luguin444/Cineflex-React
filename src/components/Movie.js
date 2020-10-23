import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import MoviesContext from '../contexts/MoviesContext'

export default function Movie (props) {

    const { setMovieSelected } = useContext(MoviesContext);

    const { movie } = props;
    const { posterURL } = movie;
    
    return (
        <Link to = "/sessions">
            <Img src = {posterURL} onClick = { () => setMovieSelected(movie) }/>
        </Link>
    );
}

const Img = styled.img`
    margin-bottom: 0.9rem;
    width: 8rem;
`
