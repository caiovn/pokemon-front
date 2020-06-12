import styled from 'styled-components';

export const NavbarStyle = styled.div`
  background-color: #000000;
  padding: 10px 0 10px 0;
  width: 0 auto;
  position: sticky;
  top: 0;

  a {
      padding: 12px 10px 10px 10px;
      color: #FFFFFF;
      text-decoration: none;
      margin-right: 1px;
    }

  a:hover {
      background-color: #262626;
  }

  @media (max-width: 577px) {
    display: none;
  }
`;

export const OnlyToExcludeTheError = styled.div``;
