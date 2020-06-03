import styled from 'styled-components';

export const Content = styled.div`
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
  margin: 0 auto;
  margin-bottom: 15px;
  width: 200px;
  padding-left: 2px;
`;

export const Img = styled.img`
  cursor: pointer;
  width: 196px;
  height: 196px;
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
  color: gray;
  font-size:16px;
`;

export const HoverCard = styled.div`
  ${Content}:hover & {
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
  }
`;
