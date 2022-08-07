import styled, { keyframes, css } from 'styled-components';

const Rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const RotateAnim = css`
  animation: ${Rotate} 1s linear infinite;
`;

const PrixClipFix = keyframes`
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
`;

const PrixClipFixAnim = css`
  animation: ${PrixClipFix} 2s linear infinite;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  ${RotateAnim};
  ${PrixClipFixAnim};

  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
  }
`;
