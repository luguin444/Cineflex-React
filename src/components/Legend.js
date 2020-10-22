import React from 'react'
import styled from 'styled-components'

export default function Legend () {

    
    return (
        <>
            <LineLegend color = "#54aba5" border = "#3ccfc4">
                <div></div>
                <span>Selecionado</span>
            </LineLegend >
            <LineLegend color = "#57859c" border = "#1e408f"> 
                <div></div>
                <span>Disponível</span>
            </LineLegend>
            <LineLegend color = "#f0ea7d" border = "#ebe242">
                <div></div>
                <span>Indisponível</span>
            </LineLegend>
        </>
    );
}

const LineLegend = styled.div`

    display:flex;
    margin-left: 1.1rem;
    align-items: center;
    margin-bottom: 0.5rem;

    div {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: ${ props => props.color};
        border: 3px solid ${ props => props.border};
    }

    span {
        font-size: 1rem;
        color: #444;
        margin-left: 0.7rem;
    }

`
