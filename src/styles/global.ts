import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: #7d7c83;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, textarea, button {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
