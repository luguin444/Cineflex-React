import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import {H2} from './LandingPage'
import ContainerSeats from '../components/ContainerSeats'
import Legend from '../components/Legend'
import Footer from '../components/Footer'

import MoviesContext from '../contexts/MoviesContext'

export default function SeatsPage () {

    const { sessionSelected, IdSeatsSelected, setNumberSeatsSelected, setIdSeatsSelected } = useContext( MoviesContext );

    const sendSeatsToServer = (IdSeatsSelected) => {
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many",IdSeatsSelected);
    }
    
    return (
        <>
            <main>
                <H2> Selecione o(s) Assento(s) </H2>
                <ContainerSeats />
                <Legend />
                <Link to = "/ticket"><Button onClick = {() => sendSeatsToServer(IdSeatsSelected)}>Reservar assento(s)</Button></Link>
            </main>
            <Footer />
        </>
    );
}

export const Button = styled.button`

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