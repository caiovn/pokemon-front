import React from 'react';
import PropType from 'prop-types';

import {
  Image, Title, Container, Number, Text, GridContainer, Paragraph,
} from './style';

const PokemonContainer = (pokemon) => (
  pokemon.pokemon.map((index) => (
    <GridContainer key={index.info.name}>
      <Container>
        <Image src={index.info.img} />
      </Container>

      <Container>
        <Title>
          {index.info.name}
          <span>
            {`#${index.info.num}`}
          </span>
        </Title>

        <Paragraph>
          {
            index.info.type.map((type, indice) => (
              <Text key={type}>
                {!indice ? `${'Type: '}` : ', '}
                {type}
              </Text>
            ))
          }
        </Paragraph>

        <Paragraph>
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
        </Paragraph>

        <Paragraph>
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
        </Paragraph>
      </Container>
    </GridContainer>
  ))
);


PokemonContainer.propType = {
  pokemon: PropType.array.isRequired,
};

export default PokemonContainer;
