import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

import MoviesContext from '../contexts/MoviesContext'

export default function Footer () {

    const { movieSelected, dateSelected, sessionSelected } = useContext(MoviesContext);

    const history = useHistory();

    function goToLastPage () {
        history.goBack();
    }

    return (
        <FooterContainer onClick = {goToLastPage}>
            <img src = {movieSelected.posterURL} />
            <div>
                <div> {movieSelected.title} </div> 
                {sessionSelected !== null ? <div>{`${dateSelected.weekday} - ${sessionSelected.name}`}</div>: ''}
            </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`

    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
    height: 7rem;
    background-color: #dee6ee;
    display: flex;
    align-items: center;
    padding: 0.7rem 0 1rem 1.3rem;
    border-top: 2px solid #ccc;

    img {
        width: 4rem;
        object-fit: cover;
        border: 6px solid  #fff;
    }

    div{
        font-size: 1.3rem;
        color: #444;
        font-weight: 500;
        margin: 0.5rem 1rem;
    }
`