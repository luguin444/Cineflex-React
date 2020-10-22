import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import MoviesContext from '../contexts/MoviesContext'

export default function Seat (props) {

    const { IdSeatsSelected, setIdSeatsSelected, numberSeatsSelected, setNumberSeatsSelected } = useContext( MoviesContext); 

    const [isSelected, setIsSelected] = useState(false);

    const {aviability, id, number} = props;
    
    return (
        <StyledSeat 
            aviability = {aviability}
            isSelected = {isSelected}
            onClick = {() => {
                if(!aviability)
                    alert("Assento está indispońivel, selecione novamente");
                else {
                    setIsSelected(!isSelected);
                    const newSeats = {...IdSeatsSelected};
                    newSeats.ids.push([id]);
                    setIdSeatsSelected(newSeats);
                    setNumberSeatsSelected([...numberSeatsSelected, number])
                }    
            }}
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