/* eslint-disable react/prop-types */
import React from 'react';
import PropType from 'prop-types';
import { Container, Title, Image } from './styles';

import errorImg from '../../images/errorMissingno.webp';

const NoMatch = (props) => {
  const { message } = props;

  return (
    <Container>
      <Title>
        ERROR 404
      </Title>

      <Image src={errorImg} alt="Missingno" />

      <Title>
        {`${message.toUpperCase()} NOT FOUND :(`}
      </Title>
    </Container>
  );
};

NoMatch.propType = {
  message: PropType.string.isRequired,
};

export default NoMatch;
