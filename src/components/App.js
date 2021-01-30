import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './Header'
import LandingPage from '../pages/LandingPage'
import SessionPage from '../pages/SessionPage'
import SeatsPage from '../pages/SeatsPage'
import TicketPage from '../pages/TicketPage'
import SucessPage from '../pages/SucessPage'

import MoviesContext, {MoviesProvider} from '../contexts/MoviesContext'

export default function App () {
   
    return (
        <MoviesProvider>
            <Header />
            <Router>
                <Switch>
                    <Route path = "/sucess">
                        <SucessPage />
                    </Route>

                    <Route path = "/ticket">
                        <TicketPage />
                    </Route>

                     <Route path = "/seats">
                        <SeatsPage />
                    </Route>

                    <Route path = "/sessions">
                        <SessionPage />
                    </Route>

                    <Route path = "/" >
                        <LandingPage />
                    </Route>
                </Switch>
            </Router>
        </MoviesProvider>
    );
}