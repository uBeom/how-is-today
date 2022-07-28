import styled from 'styled-components';

export const Svg = styled.svg`
  margin-right: 13.38912133891213%;
  width: 10.0418410041841%;
  height: 10.0418410041841%;

  &:hover {
    fill: ${({ theme: { colors } }) => colors.blue[600]};
  }
`;
