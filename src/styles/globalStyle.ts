import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: 'Noto Sans KR';
    font-size: 62.5% !important;
    background-color: ${({ theme: { colors } }) => colors.gray[200]};
  }

  * {
    box-sizing: border-box !important;
    color: ${({ theme: { colors } }) => colors.gray[200]};
  }

  a {
    text-decoration: none;
  }

  svg {
    fill: ${({ theme: { colors } }) => colors.gray[200]};
  }

  button {
    border: none;
    padding: 0;
    appearance: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
