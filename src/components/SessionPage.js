import React, {useContext} from 'react'
import styled from 'styled-components'

import {H2} from './LandingPage'
import MoviesContext from '../contexts/MoviesContext'
import Date from './Date'
import Footer from './Footer'

export default function SessionPage () {

    const { movieSelected } = useContext(MoviesContext);

    console.log(movieSelected);

    return (
        <>
            <main>
                <H2> Selecione o Horario </H2>
                {movieSelected.days.map(day => <Date  day ={day} key = {day.id}/>)}
            </main>
            <Footer />
        </>
    );
}