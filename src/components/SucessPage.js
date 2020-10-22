import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import MoviesContext from '../contexts/MoviesContext'

import {Button} from './SeatsPage'


export default function SucessPage () {

    const {movieSelected, dateSelected, sessionSelected, numberSeatsSelected} = useContext( MoviesContext); 

    
    return (
        <>
            <H2> Pedido feito <br /> com sucesso! </H2>
            <Main>
                 <h3> {movieSelected.title} </h3>
                <h3>{`${dateSelected.date} ${sessionSelected.name}`}</h3>
                <div>
                    {numberSeatsSelected.map( (item,index) => <div key = {index}> {`Assento ${item}`} </div> )}
                </div>
            </Main>
            <Link to = "/"> <Button>Home</Button> </Link> 

        </>
    );
}

const H2 = styled.h2`
    color: #34eb74;
    text-align: center;
    font-size: 1.45rem;
    margin-bottom: 2rem;
`

const Main = styled.main`
    margin-left: 1.3rem;

    h3{
        font-size: 1.45rem;
        color: #333;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    div {
        color: #555;
        font-size: 1.1rem;
        margin-top: 0.5rem;

        &:first-child {
            margin-top: 1.4rem;
        }
        &:last-child {
            margin-bottom: 10rem;
        }
    }
`