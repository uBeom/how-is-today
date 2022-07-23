import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5% !important;
  }

  * {
    box-sizing: border-box !important;
    font-family: 'Noto Sans KR', sans-serif !important;
  }
`;

export default GlobalStyles;
