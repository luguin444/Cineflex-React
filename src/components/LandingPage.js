import React, { useContext } from 'react'
import styled from 'styled-components'

import Movie from './Movie'
import MoviesContext from '../contexts/MoviesContext'


export default function LandingPage () {

    const { moviesData } = useContext(MoviesContext);

    console.log(moviesData);

    return (
        <main>
            <H2> Selecione o filme </H2>
            <Container>
                {moviesData.map( movie => <Movie movie = {movie} key = {movie.id} />)}
            </Container>
        </main>
    );
}

export const H2 = styled.h2`
    text-align: center;
    font-size: 1.45rem;
    color: #28374a;
    margin-bottom: 2rem;
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`