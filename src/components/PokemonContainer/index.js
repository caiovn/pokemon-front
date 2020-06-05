import React from 'react';
import PropType from 'prop-types';

import { Link } from 'react-router-dom';

import {
  Image, Title, Container, Number, Text, GridContainer, Paragraph,
} from './style';


const PokemonContainer = (pokemon) => (
  pokemon.pokemon.map((index) => (
    <GridContainer key={index}>
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
                <Link to={`/pokemon/${pEvolution.num}`}>
                  <Number>{`#${pEvolution.num}`}</Number>
                </Link>
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
                <Link to={`/pokemon/${nEvolution.num}`}>
                  <Number>{`#${nEvolution.num}`}</Number>
                </Link>
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
