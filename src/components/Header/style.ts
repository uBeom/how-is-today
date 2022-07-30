import { NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { devices } from '@/styles/device';
import { BTColorStyle } from '@/styles/util/color';
import FlexStyle from '@/styles/util/flex';
import TextStyle from '@/styles/util/text';
import { IFlexBTColor, ITextBTColor } from '@/styles/util/types';

export const Container = styled.header`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray[500]};
  `}

  @media ${devices.desktop} {
    width: 25.6rem;
  }
`;

export const GNB = styled.nav<{
  isShowing: boolean;
  flex?: string;
  $justifyContent?: string;
  $alignItems?: string;
}>`
  ${FlexStyle};

  padding: 1.6rem 0;
  align-items: flex-end;
  flex-direction: column;

  ${({ isShowing }) =>
    isShowing &&
    css`
      padding-bottom: 0;
    `}

  @media ${devices.desktop} {
    padding: 0 0.8rem 0;
    margin-top: 15.6rem;
    margin-bottom: 67.4rem;

    ${({ theme: { colors } }) => css`
      border-top: 1px solid ${colors.gray[300]};
      border-bottom: 1px solid ${colors.gray[300]};
    `}
  }
`;

export const GNBList = styled.ul<{ isShowing: boolean }>`
  width: 100%;

  ${({ isShowing }) =>
    isShowing
      ? css`
          padding: 1.6rem 0 0.8rem 0;
          display: block;
        `
      : css`
          display: none;
        `}

  @media ${devices.desktop} {
    padding-top: 0.8rem;
    display: block;
  }
`;

export const Btn = styled.button`
  margin-right: 1.6rem;

  @media ${devices.tablet} {
    margin-right: 3.2rem;
  }

  @media ${devices.desktop} {
    display: none;
    background-color: black;
  }
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
