import styled, { css } from 'styled-components';

import { devices } from '@/styles/device';
import TextStyle from '@/styles/util/text';

export const Container = styled.section`
  padding: 2.4rem 3.2rem;
  width: 100%;
  order: 3;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray[500]};
  `}

  @media ${devices.tablet} {
    margin: 0 auto;
    width: calc(100% * 704 / 768);
  }

  @media ${devices.desktop} {
    margin: 3.2rem 0 0;
    width: 100%;
  }
`;

export const Title = styled.h2.attrs({
  fontWeight: 'regular',
  fontSize: 'md',
  lineHeight: '3',
  letterSpacing: 'wider',
})`
  ${TextStyle};
`;

export const Chart = styled.canvas`
  margin-top: 3.2rem;
`;
