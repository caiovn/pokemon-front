import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
    }

    body {
        font-family: "pokemon-font", monospace;
        background-color: #FFFFFF;
    }
`;

export default GlobalStyle;
