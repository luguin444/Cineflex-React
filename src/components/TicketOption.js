import React, { useState, useContext } from 'react'
import styled from 'styled-components'

import {StyledDate} from './Date'

import MoviesContext from '../contexts/MoviesContext'

export default function TicketOption (props) {

    const { numberSeatsSelected, setNumberSeatsSelected } = useContext(MoviesContext);

    const {seat, entrance} = props;
    const [isEntireSelected, setIsEntireSelected] = useState(true);
    const [isHalfSelected, setIsHalfSelected] = useState(false);
    
    return (
        <>
            <StyledDate>{`Assento ${seat}: `}</StyledDate>
            <Button isSelected = {isEntireSelected} 
                onClick = { () => {

                    let newEntrances = [...numberSeatsSelected];
                    
                    if(isEntireSelected === false) {
                        newEntrances = newEntrances.map( item => {
                            if(item.seat === seat) {
                                item.entrance = "inteira";
                            } 
                            return item;
                        })
                    }
                    setNumberSeatsSelected(newEntrances);

                    setIsEntireSelected(!isEntireSelected);
                    setIsHalfSelected(false);
                }}>
                    Inteira
            </Button>
            <Button isSelected = {isHalfSelected} 
                onClick = { () => {

                    let newEntrances = [...numberSeatsSelected];

                    if(isHalfSelected === false) {
                        newEntrances = newEntrances.map( item => {
                            if(item.seat === seat) {
                                item.entrance = "meia";
                            } 
                            return item;
                        })
                    }
                    setNumberSeatsSelected(newEntrances);

                    setIsHalfSelected(!isHalfSelected);
                    setIsEntireSelected(false);
                }}>
                    Meia
            </Button>
        </>
    );
}

const Button = styled.button`

    margin: -0.4rem 0 0.8rem 1.3rem;
    border:0;
    height: 35px;
    width: 67px;
    cursor: pointer;
    outline:0;
    color: #fff;
    background-color: ${ (props) => props.isSelected ? "#db7114" : "#888"  } ;

    &:last-child {
        margin-bottom: 7.4rem;
    }

    &:focus {
        outline: 0;
    }
`