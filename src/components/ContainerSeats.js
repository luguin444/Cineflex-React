import React, {useContext} from 'react'
import styled from 'styled-components'

import Seat from './Seat'

import MoviesContext from '../contexts/MoviesContext'

export default function ContainerSeats () {

    const { sessionSelected } = useContext( MoviesContext);
    
    return (
        <StyledContainerSeats>
            {sessionSelected.seats.map( item => 
                <div key = {item.id}>
                    <Seat aviability = {item.isAvailable} id = {item.id} number = {item.name} />
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
        font-size: 0.45rem;
        margin-top: 0.16rem;
    }
`