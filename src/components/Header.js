import React from 'react'
import styled from 'styled-components'


export default function Header () {

    return (
        <StyledHeader >
            CINEFLEX
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    color: orange;
    font-size: 2rem;
    background-color: #c3cfd9;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.4rem;
`
