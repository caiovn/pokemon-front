import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const RefreshBtn = styled.button`
   background-color: #FFFFFF;
    margin: 0 auto;
    border: 1px solid #000000;
    border-radius: 4px;
    font-family: "pokemon font",monospace;
    font-size: 20px;
    color: #000000;
    cursor: pointer;

    @media(max-width: 576px){
      padding: 7px 0;
      width: 98%;
    }

    @media(min-width: 576px){
      padding: 7px 110px;
    }
`;
