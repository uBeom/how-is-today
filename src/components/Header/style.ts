import { NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { BTColorStyle } from '@/styles/util/color';
import TextStyle from '@/styles/util/text';
import { IBTColor, ITextBTColor } from '@/styles/util/type';

export const Container = styled.header`
  padding-top: 10.83333333333333%;
  padding-bottom: 44.16666666666667%;
  width: 17.7778%;

  ${({ theme: { colors } }) => css`
    border-right: 1px solid ${colors.gray[300]};
    background-color: ${colors.gray[500]};
  `}
`;

export const GNB = styled.nav`
  padding: 4.705882352941176% 3.137254901960784%;

  ${({ theme: { colors } }) => css`
    border-top: 1px solid ${colors.gray[300]};
    border-bottom: 1px solid ${colors.gray[300]};
  `}
`;

export const GNBList = styled.ul``;

const ItemStyle = css<IBTColor>`
  ${BTColorStyle};

  border-radius: 4px;
`;

const SvgStyle = css`
  ${({ theme: { colors } }) => css`
    fill: ${colors.blue[600]};
  `}
`;

export const Item = styled.li<ITextBTColor>`
  ${TextStyle};

  padding-bottom: 3.137254901960784%;

  &:last-child {
    padding-bottom: 0;
  }

  & .active {
    ${ItemStyle};

    svg {
      ${SvgStyle};
    }
  }
`;

export const NLink = styled(NavLink)`
  padding: 4.602510460251046% 3.347280334728033%;
  display: flex;
  align-items: center;

  &:hover {
    ${ItemStyle};

    svg {
      ${SvgStyle};
    }
  }
`;
