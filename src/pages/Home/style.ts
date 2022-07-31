import styled from 'styled-components';

import { devices } from '@/styles/device';

export const Container = styled.main`
  padding: 3.2rem 0;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.gray[400]};

  @media ${devices.desktop} {
    padding: 3.2rem;
    width: 120.8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 3.2rem;
  }
`;
