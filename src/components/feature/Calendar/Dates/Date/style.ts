import styled, { css } from 'styled-components';

import { IContainer } from './types';

import { BTColorStyle } from '@/styles/util/color';
import TextStyle from '@/styles/util/text';

export const Container = styled.div.attrs({
  fontSize: 'lg',
  fontWeight: 'regular',
  lineHeight: 'taller',
  letterSpacing: 'wider',
  $bColor: 'blue 400',
  $tColor: 'white',
})<IContainer>`
  ${TextStyle};

  padding: 0.8rem;
  width: calc(100% / 7);
  display: inline-block;
  text-align: center;

  ${({ date, today }) =>
    date === today &&
    css`
      ${BTColorStyle};

      border-radius: 4px;
    `}
`;
