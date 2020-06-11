/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

import { NavbarStyle } from './styles';

const Navbar = (props) => {
  const { paths } = props;

  return (
    <NavbarStyle>
      {paths.map((index) => (
        <Link to={index.link} key={index.title}>{index.title}</Link>
      ))}
    </NavbarStyle>
  );
};

Navbar.propType = {
  paths: PropType.array.isRequired,
  onClick: PropType.func,
};

export default Navbar;
