import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';
import Random from '../pages/Random';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/random">
      <Random />
    </Route>
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
);

export const Paths = [
  {
    link: '/',
    title: 'Pokémons',
  },
  {
    link: '/random',
    title: 'Random Pokémon',
  },
];
