import React, {useContext} from 'react'

import {H2} from './LandingPage'
import MoviesContext from '../contexts/MoviesContext'
import Date from '../components/Date'
import Footer from '../components/Footer'

export default function SessionPage () {

    const { movieSelected } = useContext(MoviesContext);

    return (
        <>
            <main>
                <H2> Selecione o Horário </H2>
                {movieSelected.days.map(day => <Date  day ={day} key = {day.id}/>)}
            </main>
            <Footer />
        </>
    );
}