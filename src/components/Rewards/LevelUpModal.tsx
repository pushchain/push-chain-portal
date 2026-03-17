import { css } from "styled-components";
import Lottie from "lottie-react";

import { Box, Button, LevelUpCart, LevelUpIcon, Modal, Multiplier, RewardsCoin, SeasonThreePoints, Text } from "../../blocks";

import ModalBg from "../../../static/assets/website/shared/modal-bg.webp";
import BoxAnimation from "../../../static/assets/website/rewards/box.json";

export type LevelUpReward = {
  id: number;
  value: string;
  label: string;
  type: 'pc_tokens' | 'points' | 'xp_boost' | string;
};

type LevelUpModalProps = {
  isOpen: boolean;
  onClose: () => void;
  level: number;
  rewards: LevelUpReward[];
};

const LevelUpModal = ({ isOpen, onClose, level, rewards }: LevelUpModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="small"
      css={css`
        border-radius: var(--radius-lg, 32px);
        outline: none;
        background: linear-gradient(180deg, #000 0%, #4C2A6B 100%);
        background-image: url(${ModalBg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        min-height: 500px;

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
        position="relative"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="spacing-md"
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
            Your Rewards!
          </Text>

          <Box display="flex" alignItems="center" gap="spacing-xxs">
            <LevelUpIcon />
            <Text variant="h3-bold">Lv.{level}</Text>
          </Box>
        </Box>

        <Box margin="spacing-sm spacing-none spacing-none spacing-none">
            <Lottie
              animationData={BoxAnimation}
              loop
              style={{ width: '220px', height: '220px' }}
            />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap="spacing-sm"
          width="100%"
        >
          {rewards?.map((reward) => (
            <Box
              key={reward.id}
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="center"
              css={css`
                flex: 1;
                height: 116px;
              `}
            >
              <Box
                css={css`
                        position: absolute;
                        top: 0px;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 1;
                        width: 88px;
                        height: 88px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        filter: drop-shadow(0 11.858px 20.159px rgba(0, 0, 0, 0.50));
                    `}>
                        {reward.type === 'pc_tokens' && <RewardsCoin width={60} height={60} />}
                        {reward.type === 'points' && <SeasonThreePoints width={50} height={50} />}
                        {reward.type === 'xp_boost' && <Multiplier width={50} height={50} />}
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-end"
                css={css`
                  position: absolute;
                  bottom: -15px;
                  left: 0;
                  right: 0;
                  height: 75px;
                  border-radius: 12px;
                  border: 0.5px solid rgba(255, 255, 255, 0.40);
                  background: radial-gradient(50% 50% at 70% 43%, #C35FF5 0%, #635CC8 100%);
                  padding: 8px;
                  box-sizing: border-box;
                `}
              >
                <Text
                  variant="h4-bold"
                  textAlign="center"
                  css={css`
                    font-size: 29px;
                    line-height: 1;
                  `}
                >
                  {reward.value}
                </Text>
                <Text
                  variant="bes-bold"
                  textAlign="center"
                  css={css`
                    font-size: 12px;
                  `}
                >
                  {reward.label}
                </Text>
              </Box>
            </Box>
          ))}
        </Box>

        <Button
          size="medium"
          variant="primary"
          onClick={onClose}
          css={css`
            width: 100%;
            margin-top: 24px;
          `}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default LevelUpModal;
