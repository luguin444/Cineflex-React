import React from 'react'
import styled from 'styled-components'

export default function Date (props) {

    const {day} = props;
    const {weekday, date, showtimes } = day;
    
    return (
        <>
            <StyledDate> {`${weekday} - ${date}`} </StyledDate>
            {showtimes.map( time => <Time key= {time.id}> {time.name} </Time>)} 
        </>
    );
}


const StyledDate = styled.div`

    margin-bottom: 1.2rem;
    margin-left: 1.3rem;
    color: #444;
    font-size: 1.15rem;
    font-weight: 500;
`

const Time = styled.button`
    
    height: 2.4rem;
    width: 4.6rem;
    background-color: #db7114;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: #fff;
    margin: 0 -0.65rem 1.2rem 1.3rem;
`