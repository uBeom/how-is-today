import { NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { devices } from '@/styles/device';
import { BTColorStyle } from '@/styles/util/color';
import FlexStyle from '@/styles/util/flex';
import TextStyle from '@/styles/util/text';
import { IFlexBTColor, ITextBTColor } from '@/styles/util/types';

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

  @media ${devices.desktop} {
    margin-bottom: 0.8rem;
  }
`;

export const NLink = styled(NavLink)<IFlexBTColor>`
  ${FlexStyle};

  padding: 0.8rem 1.6rem;
  gap: 3.2rem;

  @media ${devices.desktop} {
    justify-content: flex-start;
    width: 100%;

    &:hover {
      ${({ theme: { colors } }) => css`
        ${BTColorStyle};

        border-radius: 4px;

        svg {
          fill: ${colors.blue[600]};
        }
      `}
    }
  }
`;
