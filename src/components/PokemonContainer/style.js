import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75vh;

  @media(max-width: 576px){
    text-align: center;
  }
`;

export const Image = styled.img`
  margin: 0 auto;
  width: 250px;
  height: 250px;
`;

export const Title = styled.h1`
  margin: 0 auto;
  font-weight: normal;
  font-size: 40px;

  span {
    font-size: 16px;
    color: #616161;
  }
`;

export const Number = styled.span`
  color: #616161;
  font-size: 12px;
  text-decoration: underline;
`;

export const Text = styled.span`
  font-size: 20px;
`;

export const Paragraph = styled.p`

`;
