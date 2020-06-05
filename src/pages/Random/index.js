import React, { useState, useEffect } from 'react';

import api from '../../utils/api';

import { Container, RefreshBtn } from './style';
import PokemonContainer from '../../components/PokemonContainer';

const Random = () => {
  const [data, setData] = useState([]);
  const [changePokemon, setChangePokemon] = useState(false);

  useEffect(() => {
    api.get('api/v1/pokemon/random')
      .then((res) => {
        setData(res.data);
      });
  }, [changePokemon]);

  const handleChangePokemon = () => {
    if (changePokemon === false) {
      setChangePokemon(true);
    } else {
      setChangePokemon(false);
    }
  };

  return (
    <Container>
      <PokemonContainer pokemon={data} />
      <RefreshBtn onClick={handleChangePokemon}>Randomize</RefreshBtn>
    </Container>
  );
};

export default Random;
