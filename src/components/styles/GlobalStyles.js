import { createGlobalStyle } from "styled-components";

import font from "../../assets/fonts/RadnikaNext/RadnikaNext-Black.woff2";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: radnika;
    src: url(${font});
  }

  :root {
    --black: #2E2E2E;
    --yellow: #ffc600;
    --light: #ffffff;
    --rotate: -2deg;
  }

  html {
    --size: 40px;
    @media(max-width: 800px) {
      --size: 20px;
    }
    --borderSize: calc(var(--size) / 2);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    border: var(--borderSize) solid var(--black);
    border-color: var(--black);
    font-size: 10px;
    font-family: 'HCo Operator Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    color: var(--black);
    &:after {
      box-sizing: content-box;
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: calc(var(--borderSize) * -1);
      left: calc(var(--borderSize) * -1);
      z-index: -3;
      border: var(--borderSize) solid var(--black);
      background: var(--light);
    }
    &:before {
      box-sizing: content-box;
      display: block;
      content: '';
      height: calc(100% - var(--size));
      width: calc(100% - var(--size));
      position: absolute;
      top: calc(var(--size) * -0.5);
      left: calc(var(--size) * -0.5);
      z-index: -1;
      border: var(--size) solid transparent;
      background-size: 250px;
    }
  }
  body {
    min-height: calc(100vh - 40px);
    font-size: 2rem;

  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
      text-decoration: none;
      color: var(--black);
    }

`;

export default GlobalStyles;
