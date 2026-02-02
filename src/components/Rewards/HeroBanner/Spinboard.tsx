import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { css } from 'styled-components';
import { gsap } from 'gsap';
import { Box } from '../../../blocks';
import spinboardImage from '/static/assets/website/rewards/spinboard.webp';
import spinboardCenter from '/static/assets/website/rewards/spinboardcenter.webp';
import stopperImage from '/static/assets/website/rewards/stopper.webp';

interface SpinboardProps {
  onSpinComplete?: (prizeIndex: number) => void;
  disabled?: boolean;
}

export interface SpinboardHandle {
  spin: (slotId: number) => void;
}

const Spinboard = forwardRef<SpinboardHandle, SpinboardProps>(
  ({ onSpinComplete, disabled = false }, ref) => {
    const wheelRef = useRef<HTMLDivElement>(null);
    const [isSpinning, setIsSpinning] = useState(false);

    const handleSpin = (slotId: number) => {
      if (isSpinning || disabled || !wheelRef.current) return;

      setIsSpinning(true);

      // Each slot is 36 degrees (360 / 10 slots)
      const slotAngle = 36;

      // Full spins for visual effect (5-7 rotations)
      const fullSpins = (Math.floor(Math.random() * 3) + 5) * 360;

      // Target angle: negative to spin clockwise to the slot
      const targetAngle = -(slotId * slotAngle);

      // Final rotation
      const finalRotation = fullSpins + targetAngle;

      gsap.to(wheelRef.current, {
        rotation: finalRotation,
        duration: 4,
        ease: 'power3.out',
        onComplete: () => {
          setIsSpinning(false);
          onSpinComplete?.(slotId);
        },
      });
    };

    useImperativeHandle(ref, () => ({
      spin: handleSpin,
    }));

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-none"
        position="relative"
        width="100%"
        css={css`
          user-select: none;
        `}
      >
        <Box
          position="relative"
          width="40px"
          height="40px"
          css={css`
            z-index: 2;
            margin-bottom: -20px;
          `}
        >
          <img
            src={stopperImage}
            alt="Stopper"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
            }}
          />
        </Box>

        <Box
          position="relative"
          width="200px"
          height="200px"
        >
          <Box
            ref={wheelRef}
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            css={css`
              z-index: 1;
            `}
          >
            <img
              src={spinboardImage}
              alt="Spin Board"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.15))',
              }}
            />
          </Box>

          <Box
            position="absolute"
            width="48px"
            height="48px"
            css={css`
              z-index: 2;
              pointer-events: none;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}
          >
            <img
              src={spinboardCenter}
              alt="Center"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>

        {/*<Box
          ref={wheelRef}
          position="relative"
          width="200px"
          height="200px"
          css={css`
            z-index: 1;
          `}
        >
          <img
            src={spinboardImage}
            alt="Spin Board"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.15))',
            }}
          />
        </Box>*/}
      </Box>
    );
  }
);

Spinboard.displayName = 'Spinboard';
export default Spinboard;
