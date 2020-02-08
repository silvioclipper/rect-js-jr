import React, { Component } from 'react';
import { isAuthnticated } from './auth'

import {BrowserRouter, Route, Switch, Redirect, Router} from 'react-router-dom';

const PrivateRoute = ({ component: Component,... rest }) => (
    <Route { ...rest} render={props=> (
        isAuthnticated() ? (
            <Component { ...props}/>
        ): (
            <Redirect to={{ pathname: '/', state: { from: props.location }}} />
        )
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1> nãoooooo </h1>} />
            <PrivateRoute path="/app" component={() => <h1>Logado</h1>}/>
        </Switch>   
    </BrowserRouter>
);

export default Routes;