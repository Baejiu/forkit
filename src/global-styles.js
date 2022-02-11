import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    background-color: #fff;
    color: #202020;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a,
  a:hover,
  a:focus {
    text-decoration: none;
    color: inherit;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ol,
  ul,
  li {
    margin: 0;
  }

`;
