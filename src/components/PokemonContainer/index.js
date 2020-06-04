import React from 'react';
import PropType from 'prop-types';

import {
  Image, Title, Container, Number, Text,
} from './style';

const PokemonContainer = (pokemon) => (
  pokemon.pokemon.map((index) => (
    <Container key={index.info.name}>
      <Image src={index.info.img} />
      <Title>
        {index.info.name}
        <span>
          {`#${index.info.num}`}
        </span>
      </Title>

      <Container>
        <Text>Type:&nbsp;</Text>
        {
            index.info.type.map((type) => (
              <Text key={type}>
                {type}
                &nbsp;
              </Text>
            ))
          }
      </Container>

      <Container>
        {
            index.info.prev_evolution
            && index.info.prev_evolution.map((pEvolution, indice) => (
              <Text key={pEvolution}>
                {!indice ? `${'Previous evolution: '}` : ', '}
                {pEvolution.name}
                <Number>{`#${pEvolution.num}`}</Number>
              </Text>
            ))
          }
      </Container>

      <Container>
        {
            index.info.next_evolution
            && index.info.next_evolution.map((nEvolution, indice) => (
              <Text key={nEvolution}>
                {!indice ? `${'Previous evolution: '}` : ', '}
                {nEvolution.name}
                <Number>{`#${nEvolution.num}`}</Number>
              </Text>
            ))
        }
      </Container>
    </Container>
  ))
);


PokemonContainer.propType = {
  pokemon: PropType.array.isRequired,
};

export default PokemonContainer;
