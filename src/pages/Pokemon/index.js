/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../utils/api';
import { Container } from './styles';

import PokemonContainer from '../../components/PokemonContainer/index';
import Loading from '../../components/Loading/index';
import ErrorApi from '../../components/ErrorApi/index';


const Pokemon = () => {
  const { number } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(`api/v1/pokemon/id/${number}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
      });
  }, [number]);

  return (
    <Container>
      {
        isLoading
          ? (<Loading />)
          : (error
            ? (<ErrorApi error={error} />)
            : (<PokemonContainer pokemon={data} />)
          )
      }
    </Container>
  );
};

export default Pokemon;
