/* eslint-disable import/extensions */
import { css } from 'styled-components';

import NotoSansBold from '@/assets/fonts/NotoSansKR-Bold.woff';
import NotoSansMedium from '@/assets/fonts/NotoSansKR-Medium.woff';
import NotoSansRegular from '@/assets/fonts/NotoSansKR-Regular.woff';

const fonts = css`
  @font-face {
    font-family: LABDigital;
    font-weight: normal;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/fontlab/LABDigital.woff')
      format('woff');
  }

  @font-face {
    font-family: Noto Sans KR;
    font-weight: 700;
    font-style: normal;
    src: url(${NotoSansBold}) format('woff');
  }

  @font-face {
    font-family: Noto Sans KR;
    font-weight: 500;
    font-style: normal;
    src: url(${NotoSansMedium}) format('woff');
  }

  @font-face {
    font-family: Noto Sans KR;
    font-weight: 400;
    font-style: normal;
    src: url(${NotoSansRegular}) format('woff');
  }
`;

export default fonts;
