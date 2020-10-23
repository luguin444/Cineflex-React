import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {H2} from './LandingPage'
import {StyledDate} from '../components/Date'
import Footer from '../components/Footer'
import TicketOption from '../components/TicketOption'
import {Button} from './SeatsPage'

import MoviesContext from '../contexts/MoviesContext'

export default function TicketPage () {

    const { numberSeatsSelected, setNumberSeatsSelected } = useContext(MoviesContext);

    // setNumberSeatsSelected(numberSeatsSelected.sort((a,b) => a-b));  //vetor em ordem crescente
    
    return (
        <>
            <main>
                <H2> Selecione a(s) entrada(s)</H2>
                {numberSeatsSelected.map( item => <TicketOption seat ={item.seat} entrance= {item.entrance}/>)}
            </main>
            <Link to = "/sucess"> <Button>Fechar pedido</Button> </Link>
            <Footer />
        </>
    );
}

