import React, {useContext} from 'react'
import styled from 'styled-components'

import MoviesContext from '../contexts/MoviesContext'

import {H2} from './LandingPage'
import Footer from './Footer'

export default function SeatsPage () {

    const { sessionSelected } = useContext( MoviesContext );
    
    return (
        <>
            <main>
                <H2> Selecione o(s) Assento(s) </H2>
                <ContainerSeats>
                    {sessionSelected.seats.map( item => 
                        <div key = {item.id}>
                            <button> </button>
                            <span>{item.name}</span>
                        </div>
                        )
                    }
                </ContainerSeats>
                
            </main>
            {/* <Footer /> */}
        </>
    );
}

const ContainerSeats = styled.div`
    
    width: 100%;
    max-width: 100%;
    padding: 0 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    button {
        width: 25px;
        height: 25px;
        border-radius:50%;
        background-color: black;
        border: 0;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.3rem 0.2rem;
    }
    span {
        font-size: 0.4rem;
        margin-top: 0.16rem;
    }
`