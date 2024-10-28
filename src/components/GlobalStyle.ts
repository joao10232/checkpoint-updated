import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f4f6f9;
    color: #333;
  }

  input, button {
    font-family: 'Arial', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
