import styled, { css } from 'styled-components';

import { FadeInUp } from '@/styles/util/animations';
import FlexStyle from '@/styles/util/flex';
import TextStyle from '@/styles/util/text';

export const StatusList = styled.ul`
  ${FlexStyle};
  ${FadeInUp};

  gap: 2.702702702702703%;
  width: 60.81081081081081%;
  height: 11.82432432432432%;
`;

export const StatusItem = styled.li`
  ${FlexStyle};

  padding: 3.333333333333333%;
  width: 21.66666666666667%;
  height: 19.44444444444444%;
  flex-direction: column;

  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.gray[300]};
    background-color: ${colors.gray[500]};
  `}

  &:hover {
    ${({ theme: { colors } }) => css`
      background-color: ${colors.blue[600]};

      svg {
        ${({ theme: { colors } }) => css`
          fill: ${colors.white};
        `}
      }
    `}
  }
`;

const StatusItemHoverStyle = css`
  ${StatusItem}:hover & {
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
    `}
  }
`;

export const Count = styled.strong`
  ${TextStyle};
  ${StatusItemHoverStyle};

  padding-top: 2.564102564102564%;
`;

export const Title = styled.h3`
  ${TextStyle};
  ${StatusItemHoverStyle};
`;
