import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-row-gap: 75px;

  @media (max-width: 576px) {
    grid-row-gap: 50px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin: 0 auto;
  font-family: "pokemon-font", monospace;
  font-weight: normal;
  font-size: 60px;

  @media (max-width: 576px) {
    font-size: 30px;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    font-size: 45px;
  }
`;

export const Image = styled.img`
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 98%;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    width: 98%;
  }
`;
