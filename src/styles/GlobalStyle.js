import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 25px;
    color: #221738;
  }

  h1 {
    font-size: 36px;
    color: #342B50;
  }

  h2 {
    font-size: 28px;
    color: #342B50;
  }

  h3 {
    font-size: 24px;
    color: #342B50;
  }
`;
