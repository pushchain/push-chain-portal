import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, Lock } from '../../../blocks';
import { useNavigate } from 'react-router-dom';
import OpenPassImage from '../../../../static/assets/website/pushpass/OpenPass.webp';
import OpenPassLockedImage from '../../../../static/assets/website/pushpass/OpenPassLocked.webp';

type RarePassCardProps = {
  isLocked: boolean;
  isDormant?: boolean;
  lockMessage?: string;
  backgroundImage?: string;
  id?: number;
  onBlockedOpen?: () => void;
};

const RarePassCard: FC<RarePassCardProps> = ({
  isLocked,
  isDormant,
  lockMessage = 'Locked',
  id,
  onBlockedOpen,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onBlockedOpen) {
      onBlockedOpen();
      return;
    }
    navigate(`/rewards/pushpass/open`);
  }
  return (
    <Box
      height="379px"
      borderRadius="radius-xs"
      overflow="hidden"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        flex: 1;
      `}
    >
      <Box
        css={css`
          position: absolute;
          inset: 0;
          background: ${isLocked && !isDormant
                      ? `url(${OpenPassLockedImage}) center/cover`
                      : `url(${OpenPassImage}) center/cover`
                  };
          pointer-events: none;
          z-index: 0;
        `}
      />

      <Box
        height="379px"
        gap="spacing-xxs"
        alignSelf="stretch"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 999;
        `}
      >
        {isLocked && !isDormant ? (
          <>
            <Box width="32px" height="32px">
              <Lock size={32} color="icon-primary" />
            </Box>
            <Text
              variant="bs-bold"
              color="text-primary"
              css={css`
                text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
                text-align: center;
                align-self: stretch;
              `}
            >
              {lockMessage}
            </Text>
          </>
        ) : isDormant ? (
          <Box
            css={css`
              display: inline-flex;
              align-items: flex-start;
            `}
          >
            <Button
              size="medium"
              variant="primary"
              disabled
              css={css`
                min-width: 100px;
                height: 48px;
                box-shadow: 0px 4px 18.9px rgba(0, 0, 0, 0.5);
              `}
            >
              {lockMessage || 'Reveal at Lv. 25'}
            </Button>
          </Box>
        ) : (
          <Box
            height="48px"
            gap="spacing-xs"
            css={css`
              display: inline-flex;
              flex-direction: column;
              align-items: flex-start;
            `}
          >
            <Box
              css={css`
                display: inline-flex;
                align-items: flex-start;
              `}
            >
              <Button
                size="medium"
                variant="primary"
                onClick={handleClick}
                css={css`
                  min-width: 100px;
                  height: 48px;
                  background: #d548ec;
                  box-shadow: 0px 4px 18.9px rgba(0, 0, 0, 0.5);
                `}
              >
                <Box
                  gap="spacing-xxxs"
                  css={css`
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <Text
                    css={css`
                      font-size: 16px;
                      font-weight: 500;
                      line-height: 16px;
                      white-space: nowrap;
                      color: #fff;
                    `}
                  >
                    {lockMessage || 'Open Pass'}
                  </Text>
                </Box>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RarePassCard;
