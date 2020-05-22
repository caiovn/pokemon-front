import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
    const location = useLocation();
    return(
        <span>no match for {location.pathname}</span>
    );
};

export default NoMatch;