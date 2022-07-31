import styled, { css } from 'styled-components';

import { devices } from '@/styles/device';
import { BTColorStyle } from '@/styles/util/color';
import TextStyle from '@/styles/util/text';
import { IBTColor } from '@/styles/util/types';

export const Container = styled.section.attrs({
  $bColor: 'gray 500',
  $tColor: 'white',
})<IBTColor>`
  ${BTColorStyle}

  padding: 2.4rem 1.6rem;
  width: 100%;
  height: 300px;

  @media ${devices.tablet} {
    margin: 0 auto;
    width: calc(100% * 704 / 768);
  }

  @media ${devices.desktop} {
    max-width: 36rem;
    width: 100%;
    order: 2;
  }
`;

export const YearMonth = styled.h3.attrs({
  fontSize: 'sm',
  fontWeight: 'medium',
  lineHeight: 'tall',
  letterSpacing: 'wide',
})`
  ${TextStyle}

  margin-bottom: 2.4rem;
  text-align: center;

  ${({ theme: { colors } }) => css`
    color: ${colors.gray[50]};
  `}
`;
