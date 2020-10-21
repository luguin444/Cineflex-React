import React, {useContext} from 'react'
import styled from 'styled-components'

import MoviesContext from '../contexts/MoviesContext'

export default function Footer () {

    const { movieSelected } = useContext(MoviesContext);

    
    return (
        <FooterContainer>
            <img src = {movieSelected.posterURL} />
            <div> {movieSelected.title} </div>
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

    img {
        width: 4rem;
        object-fit: cover;
        border: 6px solid  #fff;
    }

    div{
        margin-left: 1rem; 
        font-size: 1.3rem;
        color: #444;
        font-weight: 500;
    }
`