import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #e5e5e5;
      text-decoration: none;
      color: black;
    }

    body {
        font-family: "pokemon-font", monospace;
    }
`;

export default GlobalStyle;
