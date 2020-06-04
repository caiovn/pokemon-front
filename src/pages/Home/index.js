import React, { useState, useEffect } from 'react';

import api from '../../utils/api';

import Container from './styles';
import Card from '../../components/Card/index';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get('api/v1/pokemons')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <Container>
      {data.map((index) => (
        <Card
          key={index.info.num}
          image={index.info.img}
          name={index.info.name}
          number={index.info.num}
        />
      ))}
    </Container>
  );
};

export default Home;
