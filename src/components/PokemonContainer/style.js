import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 88vh;
`;

export const Image = styled.img`
  margin: 0 auto;
  width: 250px;
`;

export const Title = styled.h1`
  margin: 0 auto;
  font-weight: normal;
  font-size: 40px;

  span {
    font-size: 16px;
    color: #423e3e;
  }
`;

export const Number = styled.span`
  color: gray;
  font-size: 12px;
`;

export const Text = styled.span`
  font-size: 20px;
`;

export const Paragraph = styled.p`

`;
