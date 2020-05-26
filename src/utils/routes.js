import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';

export const Routes = () => {
    return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    );
}

export const Paths = [
    {
        link: '/',
        title: 'Home'
    },
    {
        link: '/random',
        title: 'Random Pokémon'
    }
];