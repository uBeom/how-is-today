import styled, { css } from 'styled-components';

import { devices } from '@/styles/device';
import { fadeInUp } from '@/styles/util/animations';
import FlexStyle from '@/styles/util/flex';
import TextStyle from '@/styles/util/text';

export const Container = styled.section`
  padding: 3.2rem 0;

  @media ${devices.tablet} {
    padding: 0 3.2rem;
  }

  @media ${devices.desktop} {
    padding: 0;
    max-width: 72rem;
  }
`;

export const StatusList = styled.ul`
  ${FlexStyle};

  gap: 3.2rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.5s linear;

  @media ${devices.tablet} {
    flex-wrap: nowrap;
  }
`;

export const StatusItem = styled.li`
  ${FlexStyle};

  padding: 1.6rem;
  width: calc(100% * 240 / 576);
  flex-direction: column;

  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.gray[300]};
    background-color: ${colors.gray[500]};
  `}

  @media ${devices.tablet} {
    width: calc(100% * 152 / 768);
  }

  @media ${devices.desktop} {
    width: calc(100% * 156 / 720);

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
  }
`;

const StatusItemHoverStyle = css`
  @media ${devices.desktop} {
    ${StatusItem}:hover & {
      ${({ theme: { colors } }) => css`
        color: ${colors.white};
      `}
    }
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
