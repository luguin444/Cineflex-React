import React, { useState } from 'react'
import styled from 'styled-components'

export default function Seat (props) {

    const [isSelected, setIsSelected] = useState(false);

    const {aviability} = props;
    
    return (
        <StyledSeat 
            aviability = {aviability}
            isSelected = {isSelected}
            onClick = {() => setIsSelected(!isSelected)}
        />
    );
}

const StyledSeat = styled.button`
    width: 25px;
    height: 25px;
    border: 0;
    border-radius:50%;
    background-color: ${ (props) => {
        if (props.isSelected) {
            return "#54aba5";
        }
        else if (props.aviability)       
            return "#57859c";
        else 
            return "#f0ea7d";       
    }};

    &:focus {
        outline: 0;
    }
`