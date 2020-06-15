import styled from 'styled-components';

export const NavbarStyle = styled.div`
  background-color: #000000;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
      color: #FFFFFF;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 75px;
    }

  @media (min-width: 576px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  margin: 0 auto;
  width: 80px;
  padding: 5px;
`;
