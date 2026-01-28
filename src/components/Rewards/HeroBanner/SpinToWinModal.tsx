import { useState, useRef } from 'react';
import { css } from 'styled-components';
import { Box, Button, Modal, Text } from '../../../blocks';
import Spinboard, { SpinboardHandle } from './Spinboard';
import { useSpinStatus } from '../hooks/useSpinStatus';
import { useSpinTheWheel } from '../../../queries/hooks';

type SpinToWinModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SpinToWinModal = ({ isOpen, onClose }: SpinToWinModalProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [wonPrize, setWonPrize] = useState('');
  const spinboardRef = useRef<SpinboardHandle>(null);

  const { spinStatus, authHeaders, refetch } = useSpinStatus();
  const { mutate: spin, isPending: isSpinPending } = useSpinTheWheel();

  const handleSpinClick = () => {
    // if (isSpinning || !spinStatus?.canSpin || !authHeaders) return;
    // setShowResult(false);
    setIsSpinning(true);


    // target the spin
    spinboardRef.current?.spin(4);

    // spin(authHeaders, {
    //   onSuccess: (data) => {
    //     const slotIndex = (data?.slotId ?? 1) - 1;
    //     const rewardLabel = data?.rewardLabel ?? 'Prize';
    //     setWonPrize(rewardLabel);
    //     spinboardRef.current?.spin(slotIndex);
    //     refetch();
    //   },
      // onError: (error) => {
      // },
    // });
    //
      setIsSpinning(false);
    //
  };

  const handleSpinComplete = () => {
    // setIsSpinning(false);
    // setShowResult(true);
  };

  const handleClose = () => {
    if (isSpinning) return;
    setShowResult(false);
    setWonPrize('');
    onClose();
  };

  const remainingSpins = spinStatus?.remainingSpins ?? 0;
  const canSpin = spinStatus?.canSpin ?? false;
  const nextSpinCost = spinStatus?.nextSpinCost ?? 0;
  const userPoints = spinStatus?.userPoints ?? 0;
  const hasEnoughPoints = spinStatus?.hasEnoughPoints ?? false;
  const isFirstSpin = spinStatus?.currentSpinCount === 0;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="small"
      css={css`
        border-radius: var(--radius-lg, 32px);
        outline: none;
        background: linear-gradient(180deg, #000 0%, #4C2A6B 100%);

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        & > div:last-child:empty {
          display: none;
        }
      `}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-md"
        width="100%"
      >
        <Text
          variant="h2-semibold"
          textAlign="center"
          css={css`
            background: linear-gradient(180deg, #FFF 0%, #FFE397 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Spin 2 Win
        </Text>


        {showResult ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="spacing-sm"
            padding="spacing-lg"
            width="100%"
            css={css`
              animation: fadeIn 0.3s ease-in;
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
              }
            `}
          >
            <Text variant="h4-semibold" color="text-on-dark-bg">
              🎉 Congratulations!
            </Text>
            <Text variant="h3-bold" color="text-on-dark-bg">
              You Won {wonPrize}!
            </Text>
          </Box>
        ) : (
          <Box width="100%">
            <Spinboard
              ref={spinboardRef}
              onSpinComplete={handleSpinComplete}
              disabled={isSpinning}
            />
          </Box>
        )}

       <Button onClick={handleSpinClick}>Test Spin</Button>

        <Button
          size="medium"
          variant="primary"
          onClick={showResult && remainingSpins > 0 ? () => setShowResult(false) : handleSpinClick}
          disabled={isSpinning || (!showResult && !canSpin)}
          css={css`
            width: 100%;
            opacity: ${isSpinning || (!showResult && !canSpin) ? 0.6 : 1};
            cursor: ${isSpinning || (!showResult && !canSpin) ? 'not-allowed' : 'pointer'};
          `}
        >
          {isSpinning
            ? 'Spinning...'
            : showResult
              ? remainingSpins > 0
                ? `Spin Again${nextSpinCost > 0 ? ` (${nextSpinCost} Points)` : ''}`
                : 'Close'
              : canSpin
                ? isFirstSpin
                  ? 'Free Spin x1'
                  : `Spin The Wheel (${nextSpinCost} Points)`
                : !hasEnoughPoints
                  ? `Spin The Wheel ${nextSpinCost} Points`
                  : 'No Spins Available'}
        </Button>

        {isFirstSpin &&
          <Text variant='bes-semibold'>Come back daily for a free spin</Text>}

        {!isFirstSpin &&
          <Text variant='bes-semibold'>Spin again for better rewards { spinStatus?.currentSpinCount }/5
          </Text>}

        {showResult && remainingSpins === 0 && (
          <Button
            size="medium"
            variant="outline"
            onClick={handleClose}
            css={css`
              width: 100%;
            `}
          >
            Close
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default SpinToWinModal;
