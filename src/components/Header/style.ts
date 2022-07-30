import { NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { BTColorStyle } from '@/styles/util/color';
import FlexStyle from '@/styles/util/flex';
import TextStyle from '@/styles/util/text';
import { IFlexBTColor, ITextBTColor } from '@/styles/util/types';

export const Container = styled.header`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray[500]};
  `}
`;

export const GNB = styled.nav`
  ${FlexStyle};

  padding: calc(100% * 16 / 576);

  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.gray[300]};
  `}
`;

export const GNBList = styled.ul<{ isShowing: boolean }>`
  padding: calc(100% * 8 / 576) 0;

  ${({ isShowing }) =>
    isShowing
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

export const Item = styled.li<ITextBTColor>`
  ${TextStyle};

  & .active {
    ${BTColorStyle};

    border-radius: 4px;

    svg {
      ${({ theme: { colors } }) => css`
        fill: ${colors.blue[600]};
      `}
    }
  }
`;

export const NLink = styled(NavLink)<IFlexBTColor>`
  ${FlexStyle};

  padding: calc(100% * 8 / 576) calc(100% * 16 / 576);
  gap: calc(100% * 8 / 576);
`;
