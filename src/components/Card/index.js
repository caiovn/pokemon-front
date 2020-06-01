import React from 'react';
import PropTypes from 'prop-types';

import {
  Content, Img, Container, Title, Number, HoverCard,
} from './styles';

const Card = (props) => {
  const { image, name, number } = props;

  return (
    <Content>
      <HoverCard>
        <Img src={image} alt={name} />
        <Container>
          <Title>{name}</Title>
          <Number>
            #
            {number}
          </Number>
        </Container>
      </HoverCard>
    </Content>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Card;
