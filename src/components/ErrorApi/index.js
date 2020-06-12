/* eslint-disable react/prop-types */
import React from 'react';
import PropType from 'prop-types';
import { Container, Title, Image } from './styles';

import errorImg from '../../images/errorMissingno.webp';

const ErrorApi = (props) => {
  const { error } = props;

  return (
    <Container>
      <Title>{`ERROR ${error.status}`}</Title>

      <Image src={errorImg} alt="Missingno" />

      <Title>{error.statusText}</Title>
    </Container>
  );
};

ErrorApi.propType = {
  error: PropType.object.isRequired,
};

export default ErrorApi;
