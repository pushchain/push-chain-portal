import { FC } from 'react';
import { css, keyframes } from 'styled-components';
import { ArrowUpRight, Box, HoverableSVG, Link, ProgressBar, QuestBox, Refresh, RewardsStarGradient, Text, Tick, XP } from '../../../blocks';
import { ActvityType } from '../../../queries';
import { ActivityButton } from '../RewardsActivity/ActivityButton';
import { useVerifyRewards } from '../hooks/useVerifyRewards';
import { LinkTo } from '../../../css/SharedStyling';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// type Quest = {
//   title: string;
//   xp: number;
//   progress?: number;
//   maxProgress?: number;
//   isCompleted: boolean;
//   isDisabled: boolean;
// };

type QuestItemProps = {
  quest: any;
  index: number;
  isClaimCompleted: boolean;
  userId: string;
  refetchActivities?: () => void;
  setErrorMessage: (errorMessage: string) => void;
};

const QuestItem: FC<QuestItemProps> = ({
  quest,
  index,
  isClaimCompleted,
  userId,
  refetchActivities,
  setErrorMessage,
}) => {
  const { handleRewardsVerification, verifyingRewards, progressPercent } = useVerifyRewards({
    activityTypeId: quest.id,
    refetchActivity: () => refetchActivities?.(),
    setErrorMessage,
  });

  const handleClaim = () => {
    if (!userId) return;
    handleRewardsVerification(userId);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="spacing-xxs"
      padding="spacing-none spacing-md"
      width="100%"
      css={css`
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-xxxs"
        padding="spacing-sm spacing-none"
        alignSelf="stretch"
        css={css`
          border-top: ${index > 0 ? "1px solid #2D263D" : 'transparent'};
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          height={{initial: "24px", tb: "100%"}}
          alignItems="center"
          justifyContent="center"
          gap="spacing-xs"
          alignSelf="stretch"
          css={css`
            min-width: 0;
          `}
        >
          <Box
            display="flex"
            flexDirection={{ initial: 'row', tb:'column'}}
            gap={{ tb: "spacing-xs", initial: 'spacing-md'}}
            alignItems={{initial: "center", tb: "flex-start"}}
            justifyContent="space-between"
            alignSelf="stretch"
            css={css`
              flex: 1;
            `}
          >
            <Text
              variant="bs-semibold"
              color="text-primary"
              css={css`
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                overflow-wrap: break-word;
                word-break: break-word;
                min-width: 0;
              `}
            >
              {quest.title}
            </Text>

            <Box
              display="inline-flex"
              alignItems="center"
              gap="spacing-xxl"
              width={{tb: '100%'}}
              justifyContent={{ tb: 'space-between' }}
            >
              <Box display="flex" alignItems="center" justifyContent="center" width="112px">
                <Box display="inline-flex" width="112px" alignItems="flex-start">
                  {isClaimCompleted ? (
                    <ProgressBar
                      progress={100}
                      max={100}
                      size="large"
                      progressIcon={<RewardsStarGradient size={35} />}
                    />
                  ) : (
                    <Box width="112px" height="8px">
                      <ProgressBar
                        progress={progressPercent ?? null}
                        max={100}
                        size="large"
                        progressIcon={<RewardsStarGradient size={35} />}
                      />
                    </Box>
                  )}
                </Box>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                gap="spacing-md"
                css={css`
                  flex-shrink: 0;
                `}
              >
                <Box
                  display="inline-flex"
                  alignItems="center"
                  gap="spacing-xxs"
                  minWidth="80px"
                  justifyContent="flex-end"
                >
                  <Box
                    width="36px"
                    height="14px"
                    display="flex"
                    alignItems="center"
                  >
                    {isClaimCompleted ? <Tick color='#42DDB1' size={20} /> : <QuestBox />}
                  </Box>

                  {!isClaimCompleted && (
                    <Box
                      display="flex"
                      alignItems="center"
                      cursor="pointer"
                      gap="spacing-xxs"
                      onClick={handleClaim}
                      css={css`
                        border-radius: 24px;
                        border: 1px solid rgba(255, 255, 255, 0.25);
                      `}
                    >
                      <HoverableSVG
                        defaultBackground="transparent"
                        hoverBackground="#C742DD"
                        padding="spacing-xxxs"
                        borderRadius="radius-sm"
                        icon={
                          <Box
                            css={css`
                              display: flex;
                              ${verifyingRewards && css`animation: ${spin} 0.5s linear infinite;`}
                            `}
                          >
                            <Refresh color="rgba(255, 255, 255, 0.25)" />
                          </Box>
                        }
                      />
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

type AppQuestCardProps = {
  appName: string;
  appUrl: string;
  description: string;
  resetTime: any;
  quests: any;
  icon?: string;
  gradient?: string;
  bgImage?: string;
  titleGradient?: string;
  linkColor?: string;
  blurColor?: string;
  activityStatus?: any;
  isLoading?: boolean;
  refetchActivities?: any;
  userId?: string;
  completedMap?: Record<string, boolean>;
  setErrorMessage?: (errorMessage: string) => void;
};

const AppQuestCard: FC<AppQuestCardProps> = ({
  appName,
  appUrl,
  description,
  resetTime,
  quests,
  icon,
  gradient = 'linear-gradient(241deg, rgba(232, 221, 255, 1) 0%, rgba(207, 181, 255, 1) 100%)',
  bgImage,
  titleGradient = 'linear-gradient(180deg, rgba(0, 0, 0, 1) 8%, rgba(107, 48, 178, 1) 100%)',
  linkColor,
  activityStatus,
  isLoading,
  refetchActivities,
  userId,
  completedMap = {},
  setErrorMessage,
}) => {

  const fullUrl = appUrl?.startsWith("http") ? appUrl : `https://${appUrl}`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      position="relative"
      width="100%"
      css={css`
        flex: 1;
        min-width: 0;
        `}>
      <Box
        display="flex"
        flexDirection="column"
        height="271px"
        alignItems="flex-start"
        gap="spacing-xs"
        padding="spacing-md"
        position="relative"
        alignSelf="stretch"
        borderRadius="radius-xl"
        border="border-xs solid stroke-tertiary"
        overflow="hidden"
        css={css`
          background: ${bgImage ? `url(${bgImage}) center/cover no-repeat, ${gradient}` : gradient};
          z-index: 1;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          gap="spacing-xs"
          position="relative"
          alignSelf="stretch"
          css={css`
            flex: 1;
          `}
        >
          <Box
            position="absolute"
            width="241px"
            height="241px"
            borderRadius="radius-round"
            css={css`
              filter: blur(50px);
              top: 40px;
              left: -20px;
            `}
          />

          {resetTime &&
          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            gap="spacing-xs"
            padding="spacing-xxs spacing-xs"
            position="relative"
            borderRadius="radius-xl"
            css={css`
              background: rgba(255, 255, 255, 0.20);
              border: 1px solid rgba(255, 255, 255, 0.50);
            `}
          >
            <Text
              variant="bes-bold"
              css={css`
                white-space: nowrap;
                color: rgba(0, 0, 0, 0.75);

              `}
            >
              New Quests in {resetTime?.days}D {resetTime?.hours}H
            </Text>
          </Box>}

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-end"
            gap="spacing-xs"
            position="relative"
            alignSelf="stretch"
            css={css`
              flex: 1;
              `}
          >
            <Box
              display="flex"
              flexDirection="column"
              maxWidth="290px"
              alignItems="flex-start"
              gap="spacing-xxs"
            >
              <Box
                display="flex"
                alignItems="center"
                gap="spacing-xxs"
                alignSelf="stretch"
              >
                <LinkTo
                  to={fullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  padding="0px"
                  letterSpacing="0em"
                  gap="12px"
                  hoverBackground="transparent"

                >
                  <Text
                    variant="h4-semibold"
                    css={css`
                      background: ${titleGradient};
                      -webkit-background-clip: text;
                      background-clip: text;
                      -webkit-text-fill-color: transparent;
                      white-space: nowrap;
                      margin-right: 8px;
                    `}
                  >
                    {appName}
                  </Text>

                  <ArrowUpRight size={23} color='#000' />
                </LinkTo>
              </Box>

              <Text
                variant="bm-regular"
                css={css`
                  max-width: 100%;
                  color: #000;
                `}
              >
                Complete quests on{' '}
                <Link
                  to={fullUrl}
                  textProps={{ variant: "bm-bold", color: linkColor }}
                >
                  {appUrl}
                </Link>
                {' '}and claim to level up and earn rewards
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        gap="spacing-xs"
        position="relative"
        alignSelf="stretch"
        width="100%"
        css={css`
          margin-top: -29px;
          z-index: 0;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="spacing-xxs spacing-none"
          position="relative"
          alignSelf="stretch"
          borderRadius="radius-none radius-none radius-lg radius-lg"
          border="none"
          gap="spacing-none"
          width="100%"
          css={css`
            margin: -1px;
            background: rgba(0, 0, 0, 0.1);
            box-shadow:
              inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
              inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            flex: 1;

            &::before {
              content: "";
              position: absolute;
              inset: 0;
              padding: 1px;
              border-radius: 0px 0px 32px 32px;
              background: conic-gradient(
                from 90deg at 100% 100%,
                rgba(171, 70, 248, 0.4) 12%,
                rgba(171, 70, 248, 0) 37%,
                rgba(171, 70, 248, 0.4) 62%,
                rgba(171, 70, 248, 0) 87%
              );
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              z-index: 1;
              pointer-events: none;
            }
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            alignItems="flex-start"
            padding="spacing-lg spacing-none spacing-none spacing-none"
          >
            {quests?.map((quest: any, index: number) => (
              <QuestItem
                key={index}
                quest={quest}
                index={index}
                isClaimCompleted={activityStatus?.[quest?.id]?.status === 'COMPLETED'}
                userId={userId as string}
                refetchActivities={refetchActivities}
                setErrorMessage={setErrorMessage!}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppQuestCard;
