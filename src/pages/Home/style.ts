import styled from 'styled-components';

export const Container = styled.main`
  padding: 2.222222222222222%;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.gray[400]};
`;
