import { ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientShift = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

interface Props {
  children: ReactNode;
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

const Span = styled.span<{ $speed: number; $from: string; $to: string }>`
  background: linear-gradient(to right, ${p => p.$from}, ${p => p.$to}, ${p => p.$from});
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} ${p => p.$speed}s linear infinite;
`;

export function AnimatedGradientText({
  children,
  speed = 1,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  className,
}: Props) {
  return (
    <Span $speed={speed} $from={colorFrom} $to={colorTo} className={className}>
      {children}
    </Span>
  );
}
