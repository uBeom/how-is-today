import styled, { css } from 'styled-components';

import { IIconStyle } from './types';

import { devices } from '@/styles/device';

const getSize = (size: string) => {
  switch (size) {
    case 'sm':
      return css`
        width: 1.6rem;
        height: 1.6rem;

        @media ${devices.tablet} {
          width: 3.2rem;
          height: 3.2rem;
        }
      `;
    case 'md':
      return css`
        width: 3.2rem;
        height: 3.2rem;
      `;
    case 'lg':
      return css`
        width: 4.8rem;
        height: 4.8rem;
      `;
    default:
      return null;
  }
};

export const Icon = styled.svg<IIconStyle>`
  ${({ size }) => getSize(size)};
`;
