import { NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import TextStyle from '@/styles/text';

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

const ItemStyle = css`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray[400]};
    color: ${colors.blue[600]};
  `}
`;

export const Item = styled.li`
  ${TextStyle};
  padding-bottom: 3.137254901960784%;
  text-align: center;

  &:last-child {
    padding-bottom: 0;
  }

  & .active {
    ${ItemStyle};
  }
`;

export const NLink = styled(NavLink)`
  padding: 4.602510460251046% 3.347280334728033%;
  display: block;

  &:hover {
    ${ItemStyle};
  }
`;