import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NoMatch from '../pages/NoMatch';
import Random from '../pages/Random';
import Pokemon from '../pages/Pokemon';
import Search from '../pages/Search';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/random">
      <Random />
    </Route>
    <Route path="/pokemon/:number">
      <Pokemon />
    </Route>
    <Route path="/search">
      <Search />
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
    link: '/search',
    title: 'Search pokémon 🔍',
  },
  {
    link: '/random',
    title: 'Random Pokémon',
  },
];
