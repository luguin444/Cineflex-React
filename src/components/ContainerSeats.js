import React, {useContext} from 'react'
import styled from 'styled-components'

import MoviesContext from '../contexts/MoviesContext'
import Seat from './Seat'

export default function ContainerSeats () {

    const { sessionSelected } = useContext( MoviesContext);
    //const useState, pensando em criar um botão desses como elementos e por um Usestate pra cada 

    
    return (
        <StyledContainerSeats>
            {sessionSelected.seats.map( item => 
                <div key = {item.id}>
                    <Seat aviability = {item.isAvailable} id = {item.id} />
                    <span>{item.name}</span>
                </div>
                )
            }
        </StyledContainerSeats>
    );
}

const StyledContainerSeats = styled.div`
    
    width: 100%;
    max-width: 100%;
    padding: 0 1.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;

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