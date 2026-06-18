import { FC, useState } from 'react';
import { usePushWalletContext } from '@pushchain/ui-kit';
import { css } from 'styled-components';

import { useGetQuests, useGetQuestsProgress, useGetRewardsActivity, useGetSeasonThreeUserByWallet, useGetQuestActivities } from '../../../queries';
import { walletToFullCAIP10 } from '../../../helpers/web3helper';

import AppQuestCard from './AppQuestCard';
import { APP_QUEST_METADATA, AppQuestMetadata } from './appQuestConfig';
import { fadeInCss } from '../utils/FadeIn';
import { useCountdown } from '../hooks/useCountdown';
import { Box } from '../../../blocks';

type DynamicAppQuestCardProps = {
  appId: string;
  userId?: string;
  activityStatuses?: any;
  isLoadingActivities?: boolean;
  questProgressMap: Record<string, { progress: number; status: string }>;
  refetchParent: () => void;
  resetTime: any;
  setErrorMessage: (msg: string) => void;
  metadata: AppQuestMetadata;
};

const DynamicAppQuestCard: FC<DynamicAppQuestCardProps> = ({
  appId,
  userId,
  activityStatuses,
  isLoadingActivities,
  questProgressMap,
  refetchParent,
  resetTime,
  setErrorMessage,
  metadata,
}) => {
  const { data: quests } = useGetQuests({ appId });
  const { refetch: refetchProgress } = useGetQuestsProgress({ appId, userId });

  const enabledQuests = quests?.data?.quests?.filter((q) => q.status === 'ENABLED');

  const refetchAll = () => {
    refetchParent();
    refetchProgress();
  };

  return (
    <AppQuestCard
      appName={metadata.appName}
      appUrl={metadata.appUrl}
      bgImage={metadata.bgImage}
      description=""
      resetTime={resetTime}
      quests={enabledQuests}
      activityStatus={activityStatuses}
      isLoading={isLoadingActivities}
      refetchActivities={refetchAll}
      userId={userId}
      completedMap={{}}
      questProgressMap={questProgressMap}
      setErrorMessage={setErrorMessage}
      titleGradient={metadata.titleGradient}
      linkColor={metadata.linkColor}
    />
  );
};

const AppQuestSection = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { universalAccount } = usePushWalletContext('wallet1');

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { data: questActivitiesData, refetch: refetchQuestActivities } = useGetQuestActivities(userDetails?.userId);

  const questProgressMap: Record<string, { progress: number; status: string }> = {};
  questActivitiesData?.activities?.forEach((app) => {
    app.quests.forEach((q) => {
      questProgressMap[q.activityTypeId] = { progress: q.progress, status: q.status };
    });
  });

  const allActivityIds = questActivitiesData?.activities?.flatMap(
    (app) => app.quests.map((q) => q.activityTypeId)
  ) ?? [];

  const { data: activityStatuses, isLoading: isLoadingActivities, refetch: refetchActivities } = useGetRewardsActivity(
    {
      userId: userDetails?.userId as string,
      activityTypes: allActivityIds,
    },
    { enabled: !!userDetails?.userId && allActivityIds.length > 0 }
  );

  const { timeLeft } = useCountdown("2026-06-23T14:00:00Z");

  const activeApps = questActivitiesData?.activities?.filter(
    (app) => !!APP_QUEST_METADATA[app.appId]
  ) ?? [];

  const handleRefetchAll = () => {
    refetchActivities();
    refetchQuestActivities();
  };

  return (
    <Box
      width="100%"
      css={css`${fadeInCss(100)}`}
    >
      <Box
        display="flex"
        gap="spacing-md"
        width="100%"
        flexDirection={{ initial: 'row', tb: 'column' }}
        css={css`
          box-sizing: border-box;
        `}
      >
        {activeApps?.slice(0,2).map((app) => (
          <DynamicAppQuestCard
            key={app.appId}
            appId={app.appId}
            userId={userDetails?.userId}
            activityStatuses={activityStatuses}
            isLoadingActivities={isLoadingActivities}
            questProgressMap={questProgressMap}
            refetchParent={handleRefetchAll}
            resetTime={timeLeft}
            setErrorMessage={setErrorMessage}
            metadata={APP_QUEST_METADATA[app.appId]}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AppQuestSection;
