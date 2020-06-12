/* eslint-disable react/prop-types */
import React from 'react';
import PropType from 'prop-types';
import { Container, Title, Image } from './styles';

import errorImg from '../../images/errorMissingno.webp';

const ErrorApi = (props) => {
  const { error } = props;

  return (
    <>
      {error.status !== undefined ? (
        <Container>
          <Title>{`ERROR ${error.status}`}</Title>

          <Image src={errorImg} alt="Missingno" />

          <Title>{error.statusText.toUpperCase()}</Title>
        </Container>
      ) : (
        <Container>
          <Title>AN ERROR HAS OCURRED</Title>

          <Image src={errorImg} alt="Missingno" />

          <Title>PLEASE, TRY AGAIN</Title>
        </Container>
      )}
    </>
  );
};

ErrorApi.propType = {
  error: PropType.object.isRequired,
};

export default ErrorApi;
