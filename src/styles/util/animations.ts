import { css, keyframes } from 'styled-components';

const fadeInUp = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
`;

export const fadeInUpAnimation = css`
  animation: ${fadeInUp} 0.5s linear;
`;
