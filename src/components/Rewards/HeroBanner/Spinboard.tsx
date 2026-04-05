import { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
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
  startSpin: () => void;
  landOn: (slotId: number) => void;
  stopSpin: () => void;
  reset: () => void;
}

const Spinboard = forwardRef<SpinboardHandle, SpinboardProps>(
  ({ onSpinComplete, disabled = false }, ref) => {
    const wheelRef = useRef<HTMLDivElement>(null);
    const loopTween = useRef<gsap.core.Tween | null>(null);
    const landTween = useRef<gsap.core.Tween | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const currentRotation = useRef(0);

    useEffect(() => {
      return () => {
        loopTween.current?.kill();
        landTween.current?.kill();
      };
    }, []);

    const startSpin = () => {
      if (isSpinning || disabled || !wheelRef.current) return;
      setIsSpinning(true);

      const spin = () => {
        if (!wheelRef.current) return;
        currentRotation.current += 360;
        loopTween.current = gsap.to(wheelRef.current, {
          rotation: currentRotation.current,
          duration: 0.6,
          ease: 'none',
          onComplete: spin,
        });
      };

      spin();
    };

    const landOn = (slotId: number) => {
      if (!wheelRef.current) return;

      if (loopTween.current) {
        // Grab where the wheel actually is right now before killing
        const actualRotation = gsap.getProperty(wheelRef.current, 'rotation') as number;
        loopTween.current.kill();
        loopTween.current = null;
        currentRotation.current = actualRotation;
      }

      // 10 slots, 36° each. Position = slotId % 10.
      // At 0° rotation, stopper points at center of position 0 (RARE PASS / slotId 10).
      // Wheel rotates clockwise (positive), but stopper moves counter-clockwise through slots,
      // so to land on position p we need: finalRotation % 360 = (360 - p * 36) % 360
      const position = slotId % 10;
      const targetMod = (360 - position * 36) % 360;

      // Round current rotation up to the next multiple of 360, then add targetMod + extra spins
      const base = Math.ceil(currentRotation.current / 360) * 360;
      const fullSpins = (Math.floor(Math.random() * 2) + 3) * 360;
      const finalRotation = base + fullSpins + targetMod;

      landTween.current = gsap.to(wheelRef.current, {
        rotation: finalRotation,
        duration: 3,
        ease: 'power3.out',
        onComplete: () => {
          currentRotation.current = finalRotation;
          landTween.current = null;
          setIsSpinning(false);
          onSpinComplete?.(slotId);
        },
      });
    };

    const stopSpin = () => {
      if (!wheelRef.current) return;

      const actualRotation = gsap.getProperty(wheelRef.current, 'rotation') as number;

      loopTween.current?.kill();
      loopTween.current = null;
      landTween.current?.kill();
      landTween.current = null;

      currentRotation.current = actualRotation;
      gsap.set(wheelRef.current, { rotation: actualRotation });
      setIsSpinning(false);
    };

    const reset = () => {
      stopSpin();
      if (wheelRef.current) {
        gsap.set(wheelRef.current, { rotation: 0 });
      }
      currentRotation.current = 0;
    };

    useImperativeHandle(ref, () => ({
      startSpin,
      landOn,
      stopSpin,
      reset,
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
          width={{ initial: "401px", ms: "250px", tb: "300px" }}
          height={{ initial: "401px", ms: "250px", tb: "300px" }}
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
      </Box>
    );
  }
);

Spinboard.displayName = 'Spinboard';
export default Spinboard;
