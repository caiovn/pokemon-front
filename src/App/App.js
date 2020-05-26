import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes, Paths } from '../utils/routes';
import GlobalStyle from './styles';
import Navbar from '../components/Navbar/index';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar Paths={Paths} />
      <Routes />
    </Router>
  );
}

export default App;
