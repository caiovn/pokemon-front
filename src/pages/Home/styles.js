import styled from 'styled-components';

const Container = styled.main`
  margin: 0 auto;
  margin-top: 15px;
  display: grid;

  @media (max-width: 576px) {
    grid-template-columns: auto;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    grid-template-columns: auto auto auto auto;
  }

  @media (min-width: 1201px) {
    grid-template-columns: auto auto auto auto auto;
  }

`;

export default Container;
