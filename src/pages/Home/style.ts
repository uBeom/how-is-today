import styled from 'styled-components';

import { devices } from '@/styles/device';

export const Container = styled.main`
  padding: 3.2rem 0;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.gray[400]};

  @media ${devices.desktop} {
    padding: 3.2rem;
    width: 118.4rem;
  }
`;
