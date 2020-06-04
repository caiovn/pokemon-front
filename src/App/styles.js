import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #e5e5e5;
    }

    body {
        font-family: "pokemon-font", monospace;
    }
`;

export default GlobalStyle;
