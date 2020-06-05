import styled from 'styled-components';

export const Content = styled.div`
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
  margin: 0 auto;
  margin-bottom: 15px;
  width: 200px;
  height: 270px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  background-color: #F2F2F2;
`;

export const Container = styled.div`
  padding: 10px;
`;

export const Title = styled.a`
  text-decoration: none;
  font-size: 20px;
`;

export const Number = styled.span`
  margin: 6px;
  color: #423e3e;
  font-size:16px;
`;

export const HoverCard = styled.div`
  height: 270px;
  ${Content}:hover & {
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
  }
`;
