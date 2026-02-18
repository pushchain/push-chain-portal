import { css } from "styled-components";

import { useAuthHeaders } from "../../context/authHeadersContext";
import { useGetLevelProgress } from "../../queries";

import { Box, Button, LevelUpIcon, Lock, ProgressBar, RewardsStarGradient, Text } from "../../blocks"
import { useRewardsContext } from "../../context/rewardsContext";

export const LevelUp = () => {
  const { authHeaders } = useAuthHeaders();
  const { data: levelProgress } = useGetLevelProgress(authHeaders);
  const { isLocked, isLockedStatusLoading } = useRewardsContext();

  const rewardsLocked = isLocked && !isLockedStatusLoading;

  console.log(levelProgress, 'level');

  const xpNeededToLevelUp = levelProgress?.nextLevelConfig.xpNeeded - levelProgress?.xp
  const progressPercentage = (levelProgress?.xp / levelProgress?.nextLevelConfig.xpNeeded) * 100;


  return(
    <Box
      borderRadius="radius-md"
      padding="spacing-md"
      height={{ initial: '100%', tb: 'auto' }}
      minHeight={{ tb: '200px' }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width={{ initial: 'auto', tb: '100%' }}
      css={css`
            border: 1px solid rgba(171, 70, 248, 0.40);
            background: rgba(0, 0, 0, 0.10);
            background-blend-mode: plus-lighter;
            box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
            backdrop-filter: blur(10px);
            min-width: 296px;
            max-width: 296px;
            box-sizing: border-box;

            @media (max-width: 768px) {
              min-width: 100%;
              max-width: 100%;
            }
        `}>

      <Box>
          <Box display="flex" flexDirection="row" justifyContent="center" gap="spacing-xs" alignItems="center">
            <LevelUpIcon />
              <Text variant="h2-semibold">Lv. { levelProgress?.level } </Text>
            </Box>

            <Text
              variant="bs-semibold"
              textAlign="center"
              css={css`
                color: rgba(255, 255, 255, 0.75);
                margin: 8px;
              `}>
              Earn { xpNeededToLevelUp || '-' } XP to level up
            </Text>
      </Box>

        <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
            width="100%"
            css={css`
              box-sizing: border-box;
              padding-bottom: 24px;
            `}
          >


            <ProgressBar
              progress={(progressPercentage) || null}
              max={100}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
            />
      </Box>
    </Box>
  )
}
