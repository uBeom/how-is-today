import styled, { css } from 'styled-components';

import { devices } from '@/styles/device';
import TextStyle from '@/styles/util/text';

export const Container = styled.section`
  padding: 2.4rem 1.6rem;
  width: 100%;
  text-align: center;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray[500]};
  `}

  @media ${devices.tablet} {
    margin: 0 auto;
    width: calc(100% * 704 / 768);
  }

  @media ${devices.desktop} {
    margin: 0;
  }
`;

export const Title = styled.h2.attrs({
  fontWeight: 'medium',
  fontSize: 'lg',
  lineHeight: '3',
  letterSpacing: 'wider',
})`
  ${TextStyle};

  margin-bottom: 2.4rem;
`;

export const CurrentLocation = styled.dt.attrs({
  fontWeight: 'regular',
  fontSize: 'sm',
  lineHeight: 'short',
  letterSpacing: 'widest',
})`
  ${TextStyle};

  margin-bottom: 1.6rem;
`;

export const Region = styled.dd.attrs({
  fontWeight: 'medium',
  fontSize: 'lg',
  lineHeight: 'short',
  letterSpacing: 'widest',
})`
  ${TextStyle};
`;

export const Time = styled.time.attrs({
  fontWeight: 'medium',
  fontSize: 'lg',
  lineHeight: 'short',
  letterSpacing: 'widest',
})`
  ${TextStyle};
`;
