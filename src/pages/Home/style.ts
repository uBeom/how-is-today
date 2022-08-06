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

export const CovidContainer = styled.div`
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  order: 1;

  @media ${devices.desktop} {
    margin-bottom: 0;
  }
`;
