import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import {
  Content, Img, Container, Title, Number,
} from './styles';

const Card = (props) => {
  const {
    image, name, number,
  } = props;

  return (
    <Content>
      <Link to={`/pokemon/${number}`}>
        <Img src={image} alt={name} />
        <Container>
          <Title>{name}</Title>
          <Number>
            #
            {number}
          </Number>
        </Container>
      </Link>
    </Content>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Card;
