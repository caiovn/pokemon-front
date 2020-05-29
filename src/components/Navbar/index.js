import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

import NavbarStyle from './styles';

const Navbar = (paths) => (
  <NavbarStyle>
    {paths.Paths.map((index) => (
      <Link to={index.link} key={index.title}>{index.title}</Link>
    ))}
  </NavbarStyle>
);

Navbar.propType = {
  paths: PropType.array.isRequired,
};

export default Navbar;
