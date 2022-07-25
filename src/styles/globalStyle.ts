import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5% !important;
  }

  * {
    box-sizing: border-box !important;
    font-family: 'Noto Sans KR', sans-serif !important;
    color: ${({ theme: { colors } }) => colors.gray[200]}
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
