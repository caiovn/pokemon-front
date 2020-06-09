/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import api from '../../utils/api';

import { Container, RefreshBtn } from './style';

import PokemonContainer from '../../components/PokemonContainer';
import Loading from '../../components/Loading/index';
import ErrorApi from '../../components/ErrorApi/index';

const Random = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [changePokemon, setChangePokemon] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get('api/v1/pokemon/random')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
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
    <>
      {
        isLoading ? (<Loading />)
          : (
            error ? (<ErrorApi error={error} />)
              : (
                <Container>
                  <PokemonContainer pokemon={data} />
                  <RefreshBtn onClick={handleChangePokemon}>Randomize</RefreshBtn>
                </Container>
              ))
      }
    </>
  );
};

export default Random;
