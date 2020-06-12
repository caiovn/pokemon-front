import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;

  CardList {
    margin: 15px;
  }
`;

export const StyledInput = styled.input`
  margin: 0 auto;
  height: 30px;
  width: 90%;
  font-size: 20px;
  font-family: "pokemon-font",monospace;
  border: none;
  padding: 7px 2px;
  border-bottom: #808080 solid 2px;
  transition: 0.5s;
  outline: 0;
`;
