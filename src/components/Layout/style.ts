import styled from 'styled-components';

import { devices } from '@/styles/device';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media ${devices.desktop} {
    display: flex;
  }
`;
