import { useState, useRef, useEffect, ReactNode } from 'react';
import { css } from 'styled-components';
import Lottie from 'lottie-react';
import { usePushWalletContext } from '@pushchain/ui-kit';


import Spinboard, { SpinboardHandle } from './Spinboard';
import { useSpinStatus } from '../hooks/useSpinStatus';
import { useGetSeasonThreeUserByWallet, useSpinTheWheel } from '../../../queries/hooks';

import ModalBg from "../../../../static/assets/website/shared/modal-bg.webp";
import OpenPassImage from "../../../../static/assets/website/pushpass/OpenPass.webp";
import { Box, Button, Modal, SeasonThreePoints, SpinGlow, Text } from '../../../blocks';
import { Image } from '../../../css/SharedStyling';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { device } from '../../../config/globals';
import { useAuthHeaders } from '../../../context/authHeadersContext';
import { trackEvent } from '../../../helpers/analytics';
import { useSpinSounds } from '../hooks/useSpinSounds';

import BurstBgAnimation from "../../../../static/assets/website/rewards/Burst-Ray-bg.json";
import PCTokenAnimation from "../../../../static/assets/website/rewards/Burst-Ray-Icon-1.json";
import MultiplierAnimation from "../../../../static/assets/website/rewards/Burst-Ray-Icon-2.json";


type SpinToWinModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SpinPrize = {
  slotId: number;
  rewardType: string;
  rewardValue: number;
  label: string;
};

type ButtonConfig = {
  label: ReactNode;
  onClick?: () => void;
  disabled: boolean;
  variant?: string;
};

const spinConfig: SpinPrize[] = [
  { slotId: 10, rewardType: "RARE_PASS", rewardValue: 1, label: "Rare Pass" },
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

const getPrizeBySlotId = (slotId: number): SpinPrize | undefined =>
  spinConfig.find(item => item.slotId === slotId);

const SpinToWinModal = ({ isOpen, onClose }: SpinToWinModalProps) => {
  const isTablet = useMediaQuery(device.tablet);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [countdown, setCountdown] = useState('');
  const [wonPrize, setWonPrize] = useState<SpinPrize | null>(null);
  const { universalAccount } = usePushWalletContext('wallet1');
  const { authHeaders, getAuthHeaders } = useAuthHeaders();
  const [isSigning, setIsSigning] = useState(false);
  const { playSpinSound, startDeceleration, stopSpinSound, playWinSound } = useSpinSounds();

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const spinboardRef = useRef<SpinboardHandle>(null);

  const { spinStatus, refetch } = useSpinStatus();
  const { data: userSeasonThreeDetails, refetch: refetchUserDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  })
  const { mutate: spin } = useSpinTheWheel();

  const remainingSpins = spinStatus?.remainingSpins ?? 0;
  const canSpin = spinStatus?.canSpin ?? false;
  const nextSpinCost = spinStatus?.nextSpinCost ?? 0;
  const hasEnoughPoints = spinStatus?.hasEnoughPoints ?? false;
  const isFirstSpin = spinStatus?.currentSpinCount === 0;
  const currentSpinCount = spinStatus?.currentSpinCount ?? 0;

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      stopSpinSound();
      setShowResult(false);
      setWonPrize(null);
      setIsSpinning(false);
      spinboardRef.current?.reset();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!spinStatus?.resetsAt) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const resetTime = new Date(spinStatus.resetsAt).getTime();
      const diff = resetTime - now;

      if (diff <= 0) {
        setCountdown('00h:00m');
        refetch();
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setCountdown(`${hours.toString().padStart(2, '0')}h:${minutes.toString().padStart(2, '0')}m`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, [spinStatus?.resetsAt]);

  const handleSpinClick = async () => {
    if (isSpinning || !canSpin) return;
    if (!authHeaders) setIsSigning(true);
    const headers = authHeaders ?? await getAuthHeaders();
    setIsSigning(false);
    if (!headers) return;

    setShowResult(false);
    setIsSpinning(true);
    spinboardRef.current?.startSpin();
    playSpinSound();
    trackEvent('spin_wheel_clicked', { event_category: 'rewards', event_label: isFirstSpin ? 'free_spin' : 'paid_spin', value: nextSpinCost });

    spin(headers, {
      onSuccess: (data) => {
        const slotId = data?.slotId ?? 1;
        startDeceleration();
        spinboardRef.current?.landOn(slotId);
        setWonPrize(getPrizeBySlotId(slotId) ?? null);
        trackEvent('spin_wheel_completed', { event_category: 'rewards', event_label: getPrizeBySlotId(slotId)?.label ?? 'unknown', reward_type: getPrizeBySlotId(slotId)?.rewardType });
        refetch();
        refetchUserDetails();
      },
      onError: () => {
        stopSpinSound();
        spinboardRef.current?.stopSpin();
        setIsSpinning(false);
      },
    });
  };

  const handleSpinComplete = () => {
    stopSpinSound();
    playWinSound();
    setIsSpinning(false);
    setShowResult(true);
  };

  const handleClose = () => {
    if (isSpinning) return;
    onClose();
  };

  const handleSpinAgain = () => {
    setShowResult(false);
  };

  const getButtonConfig = (): ButtonConfig => {
    if (isSigning) {
      return {
        label: 'Spinning...',
        disabled: true };
    }

    if (isSpinning) {
      return {
        label: 'Spinning...',
        disabled: true };
    }

    if (showResult) {
      if (wonPrize?.rewardType === 'RARE_PASS') {
        return {
          label: `More spins unlock in ${countdown}`,
          disabled: true,
          variant: 'outline',
        };
      }

      if (remainingSpins > 0) {
        const cost = nextSpinCost > 0 ? <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          margin="spacing-none spacing-none spacing-none spacing-xxxs"
          gap="spacing-xxxs">
            <Box width='30px' height='30px'><SeasonThreePoints width={30} height={30} /></Box> {nextSpinCost}
        </Box> : '';
        return {
          label: <>Spin Again {cost}</>,
          onClick: handleSpinAgain,
          disabled: false };
      }

      return {
        label: `More spins unlock in ${countdown}`,
        disabled: true,
        variant: 'outline',
      };
    }

    if (!canSpin) {
      if (currentSpinCount >= 5) {
        return {
          label: `More spins unlock in ${countdown}`,
          disabled: true,
          variant: 'outline',
        };
      }
      if (!hasEnoughPoints) {
        return {
          label:
            <>
              Not enough Points to Spin
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                margin="spacing-none spacing-none spacing-none spacing-xxs"
                gap="spacing-xxxs">
                  <Box width='30px' height='30px'><SeasonThreePoints width={30} height={30} /></Box> <Text color='#FE5454'>{nextSpinCost}</Text>
              </Box>
            </>,
          disabled: true,
          variant: 'outline'
        };
      }
      return {
        label: 'No Spins Available',
        disabled: true };
    }

    if (isFirstSpin) {
      return {
        label: 'Free Spin x1',
        onClick: handleSpinClick,
        variant: 'success',
        disabled: false };
    }

    return {
      label:
        <>
          Spin The Wheel
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            margin="spacing-none spacing-none spacing-none spacing-xxs"
            gap="spacing-xxxs">
              <Box width='30px' height='30px'><SeasonThreePoints width={30} height={30} /></Box> {nextSpinCost}
          </Box>
        </>,
      onClick: handleSpinClick,
      disabled: false
    };
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
      size={isTablet ? "small" : "large"}
      css={css`
        border-radius: var(--radius-lg, 37px);
        outline: none;
        background: url(${ModalBg}) no-repeat center center;
        background-size: auto;


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
              margin: 125px 0px 25px 0px;
            `}
          >
            <Box css={css`
              position: absolute;
              top: -15%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 0;
              pointer-events: none;
            `}>
                <Lottie
                  animationData={BurstBgAnimation}
                  loop
                  style={{ width: '240px', margin: "40px 0 0 0"}}
                />
                <Box
                  css={css`
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -30%);
                    pointer-events: none;
                    mix-blend-mode: plus-lighter;
                  `}
                >
                  <SpinGlow width={300} height={230} />
                </Box>
            </Box>

            <Box
              css={css`
                width: 226px;
                height: 127px;
                border-radius: 20.239px;
                border: 0.843px solid rgba(255, 255, 255, 0.40);
                background: radial-gradient(79.77% 79.77% at 31.11% 22.5%, #C35FF5 0%, #635CC8 100%);
                display: flex;
                align-items: flex-end;
                padding: 24px;
                box-sizing: border-box;
                position: relative;
                pointer-events: none;
                z-index: 1;
              `}
            >

            <Box css={css`
              position: absolute;
              top: -5%;
              left: 50%;
              transform: translate(-50%, -50%);

            `}>
              {(isXPBoostWinning || isPCTokenWinning) && <Lottie
                animationData={isPCTokenWinning ? PCTokenAnimation : MultiplierAnimation}
                loop
                style={{ width: '340px', margin: "60px 0 0 0" }}
              />}
              {isRarePass && <Image src={OpenPassImage} alt="Open Pass" style={{ marginBottom: '40px', filter: 'drop-shadow(0 12px 16px rgba(0,0,0,0.6))' }} width={120} />}
              {isPointsWinning && <SeasonThreePoints width={80} height={80} />}
            </Box>

            <Box css={css`width: 100%;`}>
              <Text variant="h4-semibold" textAlign="center">
                {/points|pc tokens/i.test(wonPrize?.label || "")
                  ? wonPrize?.label?.split(/(\d+)/).map((part, i) =>
                      /\d+/.test(part) ? (
                        <Text key={i} variant="h2-semibold" textAlign="center" css={css`line-height: 100%;`}>
                          {part}
                        </Text>
                      ) : (
                        part
                      )
                    )
                  : wonPrize?.label}
              </Text>
            </Box>

            {/*<Box css={css`width: 100%;`}>
              <Text variant='h4-semibold' textAlign='center'>{wonPrize?.label}</Text>
            </Box>*/}
            </Box>
          </Box>
        )}

        <Button
          size="medium"
          variant={buttonConfig.variant ?? "primary"}
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

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-xxs"
        >
          <SeasonThreePoints width={35} />
          <Text variant='h6-regular'>
            Balance: {userSeasonThreeDetails?.totalPoints.toLocaleString()}</Text>
        </Box>

      </Box>
    </Modal>
  );
};

export default SpinToWinModal;
