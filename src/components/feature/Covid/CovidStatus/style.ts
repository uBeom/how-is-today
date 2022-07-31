import styled, { css } from 'styled-components';

import { devices } from '@/styles/device';
import { fadeInUp } from '@/styles/util/animations';
import FlexStyle from '@/styles/util/flex';
import TextStyle from '@/styles/util/text';

export const Container = styled.section`
  padding: 3.2rem 0;

  @media ${devices.tablet} {
    padding: 3.2rem 0;
  }

  @media ${devices.desktop} {
    padding: 0;
    order: 1;
    grid-column: 1 / 3;
  }
`;

export const StatusList = styled.ul`
  ${FlexStyle};

  gap: 3.2rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.5s linear;

  @media ${devices.tablet} {
    margin: 0 auto;
    padding: 3.2rem 0;
    width: calc(100% * 704 / 768);
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  @media ${devices.desktop} {
    margin: 0;
    padding: 0;
    width: 100%;
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