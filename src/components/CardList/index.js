/* eslint-disable react/prop-types */
import React from 'react';
import PropType from 'prop-types';

import { Container } from './styles';
import Card from '../Card/index';

const CardList = (props) => {
  const { data } = props;

  return (
    <Container>
      {
        data.map((index) => (
          <Card
            key={index.info.num}
            image={index.info.img}
            name={index.info.name}
            number={index.info.num}
          />
        ))
      }
    </Container>
  );
};

CardList.propType = {
  data: PropType.array.isRequired,
};

export default CardList;
