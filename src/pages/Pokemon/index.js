import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../utils/api';
import { Container } from './styles';

import PokemonContainer from '../../components/PokemonContainer/index';
import NoMatch from '../NoMatch/index';


const Pokemon = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const { number } = useParams();

  useEffect(() => {
    api.get(`api/v1/pokemon/id/${number}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.response.status);
      });
  }, [number]);
  return (
    <Container>
      {!error ? (<PokemonContainer pokemon={data} />) : (<NoMatch message="pokemon" />)}

    </Container>
  );
};

export default Pokemon;
