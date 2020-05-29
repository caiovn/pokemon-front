import React from 'react';
import PropTypes from 'prop-types';

import {
  Content, Img, Container, Title,
} from './styles';

const Card = (props) => {
  const { image, name } = props;

  return (
    <Content>
      <Img src={image} alt={name} />
      <Container>
        <Title>{name}</Title>
      </Container>
    </Content>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
