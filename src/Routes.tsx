import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './core/Home';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Navbar />
        <Route path="/" exact>
            <Home />
        </Route>
    </Switch>
    </BrowserRouter>
);

export default Routes;