import styled, { css } from 'styled-components';

import TextStyle from '@/styles/util/text';

export const Container = styled.div``;

export const Days = styled.div.attrs({
  fontSize: 'sm',
  fontWeight: 'regular',
  lineHeight: 'short',
  letterSpacing: 'widest',
})`
  ${TextStyle};

  padding: 0.4rem;
  width: calc(100% / 7);
  display: inline-block;
  text-align: center;

  ${({ theme: { colors } }) => css`
    color: ${colors.gray[300]};
  `}
`;
