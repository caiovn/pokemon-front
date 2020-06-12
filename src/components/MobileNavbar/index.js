/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRandom } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Icon } from '../../images/PokemonIcon.svg';

import { NavbarStyle, LinkContainer } from './styles';

const MobileNavbar = () => (
  <NavbarStyle>
    <LinkContainer>
      <Link to="/">
        <Icon width="16" height="16" />
        Pokémons
      </Link>
    </LinkContainer>

    <LinkContainer>
      <Link to="/search">
        <FontAwesomeIcon icon={faSearch} color="white" />
        Search
      </Link>
    </LinkContainer>

    <LinkContainer>
      <Link to="/random">
        <FontAwesomeIcon icon={faRandom} color="white" />
        Random
      </Link>
    </LinkContainer>
  </NavbarStyle>
);

MobileNavbar.propType = {
  paths: PropType.array.isRequired,
};

export default MobileNavbar;
