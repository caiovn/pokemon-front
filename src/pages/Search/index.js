/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import api from '../../utils/api';
import { Container, StyledInput } from './styles';

import matchSearch from '../../utils/matchSearch';

import CardList from '../../components/CardList';
import ErrorApi from '../../components/ErrorApi/index';
import Loading from '../../components/Loading/index';

const Search = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [search, setSearch] = useState();
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get('/api/v1/pokemons')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setSearchList(matchSearch(data, search));
  }, [search]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <Container>
      <StyledInput type="text" onChange={handleChangeSearch} placeholder="Type a pokemon name" />
      {
          isLoading ? (<Loading />)
            : (
              error ? (<ErrorApi error={error} />)
                : (
                  <CardList data={searchList} />
                )
            )
        }
    </Container>


  );
};

export default Search;
