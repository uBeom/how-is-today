import styled, { css } from 'styled-components';

import FlexStyle from '@/styles/util/flex';

export const StatusList = styled.ul`
  ${FlexStyle};
  gap: 2.702702702702703%;
  width: 60.81081081081081%;
  height: 11.82432432432432%;
`;

export const StatusItem = styled.li`
  padding: 3.333333333333333%;

  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.gray[300]};
    background-color: ${colors.gray[500]};
  `}
`;
