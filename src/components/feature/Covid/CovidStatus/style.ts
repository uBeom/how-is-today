import styled from 'styled-components';

import { Blind } from '@/styles/util/a11y';

export const Container = styled.section`
  padding: 3.2rem 0;

  @media ${({ theme: { devices } }) => devices.tablet} {
    padding: 0;
  }
`;

export const StatusList = styled.ul`
  gap: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${({ theme: { devices } }) => devices.tablet} {
    margin: 0 auto;
    padding: 3.2rem 0;
    width: calc(100% * 704 / 768);
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  @media ${({ theme: { devices } }) => devices.desktop} {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled.h3`
  ${Blind}
`;
