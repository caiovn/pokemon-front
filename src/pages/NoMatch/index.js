import React from 'react';
import { Container, Title, Image } from './styles';

import errorImg from '../../images/errorMissingno.webp';

const NoMatch = () => (
  <Container>
    <Title>ERROR</Title>

    <Image src={errorImg} alt="Missingno" />

    <Title>PAGE NOT FOUND</Title>
  </Container>
);

export default NoMatch;
