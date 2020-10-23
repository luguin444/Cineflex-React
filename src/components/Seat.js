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
                    alert("Esse assento não está disponível");
                else {

                    let newSeats = {...IdSeatsSelected};
                    let newNumbers = [...numberSeatsSelected];

                    if(isSelected === true) {                       
                        newSeats.ids = newSeats.ids.filter( item => item !== id);
                        newNumbers = newNumbers.filter( item => item.seat !== number);

                    } else {
                        newSeats.ids.push([id]);
                        newNumbers.push({seat: number, entrance: "inteira"});
                    }
                    setIdSeatsSelected(newSeats);
                    setNumberSeatsSelected(newNumbers);

                    setIsSelected(!isSelected);
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
            return "#3ae83d";
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