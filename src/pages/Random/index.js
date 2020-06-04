import React, { useState, useEffect } from 'react';

import api from '../../utils/api';

import { Container } from './style';
import PokemonContainer from '../../components/PokemonContainer';

const Random = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('api/v1/pokemon/id/001')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <Container>
      <PokemonContainer pokemon={data} />
    </Container>
  );
};

export default Random;
