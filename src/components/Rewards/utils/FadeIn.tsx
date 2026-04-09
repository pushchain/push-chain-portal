import { css, keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const fadeInCss = (delay = 0) => css`
  opacity: 0;
  animation: ${fadeUp} 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: ${delay}ms;
  will-change: opacity, transform;
`;
