import { css } from 'styled-components';

export const FadeInUp = css`
  animation-duration: 0.5s;
  animation-name: FadeInUp;

  @keyframes FadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 32px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
