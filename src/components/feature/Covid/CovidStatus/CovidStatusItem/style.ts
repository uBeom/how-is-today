import styled, { css } from 'styled-components';

import TextStyle from '@/styles/util/text';

export const StatusItem = styled.li`
  padding: 1.6rem;
  width: calc(100% * 240 / 576);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.gray[300]};
    background-color: ${colors.gray[500]};
  `}

  @media ${({ theme: { devices } }) => devices.tablet} {
    width: calc(100% * 152 / 704);
  }

  @media ${({ theme: { devices } }) => devices.desktop} {
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
  @media ${({ theme: { devices } }) => devices.desktop} {
    ${StatusItem}:hover & {
      ${({ theme: { colors } }) => css`
        color: ${colors.white};
      `}
    }
  }
`;

export const Count = styled.strong.attrs({
  fontWeight: 'regular',
  fontSize: '2xl',
  lineHeight: '4',
  letterSpacing: 'normal',
})`
  ${TextStyle};
  ${StatusItemHoverStyle};

  padding-top: 0.8rem;
`;

export const Title = styled.h3.attrs({
  fontWeight: 'regular',
  fontSize: 'sm',
  lineHeight: 'short',
  letterSpacing: 'widest',
})`
  ${TextStyle};
  ${StatusItemHoverStyle};
`;
