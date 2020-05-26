import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarStyle } from './styles';

const Navbar = Paths => {
    return (
        <NavbarStyle>
            {Paths.Paths.map((index) => (
                <Link to={index.link} key={index.title}>{index.title}</Link>
            ))}          
        </NavbarStyle>
    )
};

export default Navbar;