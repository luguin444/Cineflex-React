import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './Header'
import LandingPage from './LandingPage'
import SessionPage from './SessionPage'
import SeatsPage from './SeatsPage'
import MoviesContext, {MoviesProvider} from '../contexts/MoviesContext'

export default function App () {

    
    return (
        <MoviesProvider>
            <Header />
            <Router>
                <Switch>

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