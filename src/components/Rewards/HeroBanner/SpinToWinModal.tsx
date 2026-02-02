import { useState, useRef } from 'react';
import { css } from 'styled-components';

import Spinboard, { SpinboardHandle } from './Spinboard';
import { useSpinStatus } from '../hooks/useSpinStatus';
import { useSpinTheWheel } from '../../../queries/hooks';

import ModalBg from "../../../../static/assets/website/shared/modal-bg.webp";
import OpenPassImage from "../../../../static/assets/website/pushpass/OpenPass.webp";
import { Box, Button, Modal, Multiplier, PCTokens, SeasonThreePoints, Text } from '../../../blocks';
import { Image } from '../../../css/SharedStyling';

type SpinToWinModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const spinConfig = [
  { slotId: 10, rewardType: "RARE_PASS", rewardValue: 1, label: "RARE PASS" },
  { slotId: 1, rewardType: "POINTS", rewardValue: 50, label: "50 Points" },
  { slotId: 2, rewardType: "POINTS", rewardValue: 100, label: "100 Points" },
  { slotId: 3, rewardType: "POINTS", rewardValue: 150, label: "150 Points" },
  { slotId: 4, rewardType: "PC_TOKENS", rewardValue: 5, label: "5 PC Tokens" },
  { slotId: 5, rewardType: "XP_BOOST", rewardValue: 10, label: "+10% XP (24h)" },
  { slotId: 6, rewardType: "POINTS", rewardValue: 200, label: "200 Points" },
  { slotId: 7, rewardType: "POINTS", rewardValue: 250, label: "250 Points" },
  { slotId: 8, rewardType: "PC_TOKENS", rewardValue: 10, label: "10 PC Tokens" },
  { slotId: 9, rewardType: "XP_BOOST", rewardValue: 25, label: "+25% XP (24h)" },
];

const getPrizeBySlotId = (slotId: number) =>
  spinConfig.find(item => item.slotId === slotId);

const SpinToWinModal = ({ isOpen, onClose }: SpinToWinModalProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [wonPrize, setWonPrize] = useState<ReturnType<typeof getPrizeBySlotId>>(null);
  const spinboardRef = useRef<SpinboardHandle>(null);

  const { spinStatus, authHeaders, refetch } = useSpinStatus();
  const { mutate: spin } = useSpinTheWheel();

  const remainingSpins = spinStatus?.remainingSpins ?? 0;
  const canSpin = spinStatus?.canSpin ?? false;
  const nextSpinCost = spinStatus?.nextSpinCost ?? 0;
  const hasEnoughPoints = spinStatus?.hasEnoughPoints ?? false;
  const isFirstSpin = spinStatus?.currentSpinCount === 0;

  const handleSpinClick = () => {
    if (isSpinning || !canSpin || !authHeaders) return;

    setShowResult(false);
    setIsSpinning(true);
    spinboardRef.current?.startSpin();

    spin(authHeaders, {
      onSuccess: (data) => {
        const slotId = data?.slotId ?? 1;
        spinboardRef.current?.landOn(slotId);
        setWonPrize(getPrizeBySlotId(slotId));
        refetch();
      },
      onError: (error) => {
        console.error("Spin error:", error);
        setIsSpinning(false);
      },
    });
  };

  const handleSpinComplete = () => {
    setIsSpinning(false);
    setShowResult(true);
  };

  const handleClose = () => {
    if (isSpinning) return;
    setShowResult(false);
    setWonPrize(null);
    onClose();
  };

  const handleSpinAgain = () => {
    setShowResult(false);
  };

  const getButtonConfig = () => {
    if (isSpinning) {
      return { label: 'Spinning...', onClick: undefined, disabled: true };
    }

    if (showResult) {
      if (remainingSpins > 0) {
        const cost = nextSpinCost > 0 ? ` (${nextSpinCost} Points)` : '';
        return { label: `Spin Again${cost}`, onClick: handleSpinAgain, disabled: false };
      }
      return { label: 'Close', onClick: handleClose, disabled: false };
    }

    if (!canSpin) {
      if (!hasEnoughPoints) {
        return { label: `Spin The Wheel ${nextSpinCost} Points`, onClick: undefined, disabled: true };
      }
      return { label: 'No Spins Available', onClick: undefined, disabled: true };
    }

    if (isFirstSpin) {
      return { label: 'Free Spin x1', onClick: handleSpinClick, disabled: false };
    }

    return { label: `Spin The Wheel (${nextSpinCost} Points)`, onClick: handleSpinClick, disabled: false };
  };

  const buttonConfig = getButtonConfig();
  const isRarePass = wonPrize?.rewardType === "RARE_PASS";
  const isPointsWinning = wonPrize?.rewardType === "POINTS";
  const isPCTokenWinning = wonPrize?.rewardType === "PC_TOKENS";
  const isXPBoostWinning = wonPrize?.rewardType === "XP_BOOST";

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="small"
      css={css`
        border-radius: var(--radius-lg, 32px);
        outline: none;
        background: url(${ModalBg}) no-repeat center center;
        background-size: cover;

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
          {showResult ? "Rewards" : "Spin 2 Win"}
        </Text>

        {!showResult && (
          <Box width="100%">
            <Spinboard ref={spinboardRef} onSpinComplete={handleSpinComplete} />
          </Box>
        )}

        {showResult && (
          <Box
            position='relative'
            css={css`
              width: 226px;
              height: 127px;
              border-radius: 20.239px;
              border: 0.843px solid rgba(255, 255, 255, 0.40);
              background: radial-gradient(79.77% 79.77% at 31.11% 22.5%, #C35FF5 0%, #635CC8 100%);
              margin: 125px 0px 25px 0px;
              display: flex;
              align-items: flex-end;
              padding: 24px;
              box-sizing: border-box;
            `}
          >
            <Box css={css`
              position: absolute;
              top: -15%;
              left: 50%;
              transform: translate(-50%, -50%);
            `}>
              {isRarePass && <Image src={OpenPassImage} alt="Open Pass" width={120} />}
              {isPointsWinning && <SeasonThreePoints width={80} height={80} />}
              {isXPBoostWinning && <Multiplier width={80} height={80} />}
              {isPCTokenWinning && <PCTokens width={80} height={80} />}
            </Box>

            <Box css={css`width: 100%;`}>
              <Text variant='h4-semibold' textAlign='center'>{wonPrize?.label}</Text>
            </Box>
          </Box>
        )}

        <Button
          size="medium"
          variant="primary"
          onClick={buttonConfig.onClick}
          disabled={buttonConfig.disabled}
          css={css`
            width: 100%;
            opacity: ${buttonConfig.disabled ? 0.6 : 1};
            cursor: ${buttonConfig.disabled ? 'not-allowed' : 'pointer'};
          `}
        >
          {buttonConfig.label}
        </Button>

        {isFirstSpin && (
          <Text variant='bes-semibold'>Come back daily for a free spin</Text>
        )}

        {!isFirstSpin && (
          <Text variant='bes-semibold'>
            Spin again for better rewards {spinStatus?.currentSpinCount}/5
          </Text>
        )}
      </Box>
    </Modal>
  );
};

export default SpinToWinModal;
