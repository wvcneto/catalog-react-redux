import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font: 1.6rem;
    font-family: 'Roboto Slab', serif;
    height: 100vh;
    background: #232627;
    color: #fafaff;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

`;
