import React, {useContext} from 'react'
import styled from 'styled-components'

import MoviesContext from '../contexts/MoviesContext'

export default function ContainerSeats () {

    const { sessionSelected } = useContext( MoviesContext);

    
    return (
        <StyledContainerSeats>
            {sessionSelected.seats.map( item => 
                <div key = {item.id}>
                    <button> </button>
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