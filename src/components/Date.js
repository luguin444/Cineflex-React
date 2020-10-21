import React, {useContext} from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import MoviesContext from '../contexts/MoviesContext'

export default function Date (props) {

    const { setSessionSelected, setDateSelected } = useContext( MoviesContext );

    const {day} = props;
    const {weekday, date, showtimes } = day;
    
    return (
        <>
            <StyledDate> {`${weekday} - ${date}`} </StyledDate>
            {showtimes.map( time => 
                <Link to = "/seats" key = {time.id} >   
                    <Time onClick = { () => {
                        setSessionSelected(time);
                        setDateSelected(day);
                      }}
                    > 
                        {time.name} 
                    </Time> 
                </Link>   )
            } 
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