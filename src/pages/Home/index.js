/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import api from '../../utils/api';

import { Container } from './styles';
import CardList from '../../components/CardList/index';
import ErrorApi from '../../components/ErrorApi/index';
import Loading from '../../components/Loading/index';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    api.get('api/v1/pokemons')
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <Container>
      {
        isLoading
          ? (<Loading />)
          : (error
            ? (<ErrorApi error={error} />)
            : (<CardList data={data} />)
          )
      }
    </Container>
  );
};

export default Home;
