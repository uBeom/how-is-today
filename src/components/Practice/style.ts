import styled, { css } from 'styled-components';

export const PracticeBtn = styled.button<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: aliceblue;
      border: none;
    `}
`;
