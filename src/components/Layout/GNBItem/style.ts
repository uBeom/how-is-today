import { NavLink } from 'react-router-dom';

import styled, { css } from 'styled-components';

import TextStyle from '@/styles/text';

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
