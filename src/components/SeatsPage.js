import React, {useContext} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import MoviesContext from '../contexts/MoviesContext'

import {H2} from './LandingPage'
import ContainerSeats from './ContainerSeats'
import Legend from './Legend'
import Footer from './Footer'

export default function SeatsPage () {

    const { sessionSelected, seatsSelected } = useContext( MoviesContext );

    const sendSeatsToServer = (seatsSelected) => {
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many",seatsSelected);
        request.then( () => console.log("deu bom"));
    }
    
    return (
        <>
            <main>
                <H2> Selecione o(s) Assento(s) </H2>
                <ContainerSeats />
                <Legend />
                <Button onClick = {() => sendSeatsToServer(seatsSelected)}>Reservar assento(s)</Button>
            </main>
            <Footer />
        </>
    );
}



const Button = styled.button`

    color: #fff;
    font-size: 1.05rem;
    width: 14rem;
    height: 2.6rem;
    background-color: #db7114;
    border-radius: 0.25rem;
    border: 0;
    margin: 0 auto;
    margin-top: 1.1rem;
    margin-bottom: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
`