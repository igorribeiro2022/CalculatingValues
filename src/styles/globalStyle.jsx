import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-1);
  }

  ::-webkit-scrollbar-thumb {
    background: #8d8d8d7a;
    border-radius: 20px;
    border: none;
  }

  :root {
    --blue-1: #005792;
    --blue-2: #00204A;
    --black-1: #121212;
    --gray-2: #343B41;
    --gray-1: #ECECEC;
    --gray-0: #F8F9FA;
    --sucess: #0baa2d;
    --negative: #fc2d2d;
  }

  body {
    background: var(--gray-0);
    color: var(--black-1);
  }

  body, input, button, h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
export default GlobalStyle 