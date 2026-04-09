// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeaderboardListS1 } from "./Seasons/LeaderboardListS1";
import { LeaderboardListS2 } from "./Seasons/LeaderboardListS2";
import { LeaderboardListS3 } from "./Seasons/LeaderboardListS3";
import { Box, Text } from "../../blocks";
import { useQueryClient } from "@tanstack/react-query";
import {
  getRewardsLeaderboardS1,
  getRewardsLeaderboardS2,
  getRewardsLeaderboardS3,
  rewardsLeaderboardS1,
  rewardsLeaderboardS2,
  rewardsLeaderboardS3,
} from "../../queries";

export type LeaderBoardSectionProps = Record<string, never>;

const LeaderBoardSection: FC<LeaderBoardSectionProps> = () => {
  const location = useLocation();
  const queryClient = useQueryClient();

  const [season, setSeason] = useState(() => {
    if (location.pathname.includes("s1")) return "S1";
    if (location.pathname.includes("s2")) return "S2";
    if (location.pathname.includes("s3")) return "S3";
    return "S3";
  });

  useEffect(() => {
    let newSeason = "S3";
    if (location.pathname.includes("s1")) newSeason = "S1";
    else if (location.pathname.includes("s2")) newSeason = "S2";
    else if (location.pathname.includes("s3")) newSeason = "S3";

    setSeason(newSeason);

    const prefetchMap = {
      S1: { queryKey: [rewardsLeaderboardS1], queryFn: getRewardsLeaderboardS1 },
      S2: { queryKey: [rewardsLeaderboardS2], queryFn: getRewardsLeaderboardS2 },
      S3: { queryKey: [rewardsLeaderboardS3], queryFn: getRewardsLeaderboardS3 },
    };

    const { queryKey, queryFn } = prefetchMap[newSeason];
    queryClient.prefetchInfiniteQuery({ queryKey, queryFn, initialPageParam: 1 });
  }, [location.pathname, queryClient]);

  const renderLeaderboard = () => {
    if (season === "S1") return <LeaderboardListS1 />;
    if (season === "S2") return <LeaderboardListS2 />;
    return <LeaderboardListS3 />;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
      // backgroundColor="surface-primary"
    >
      <Text
        variant="h4-bold"
        display={{ ml: "none", initial: "block" }}
        color="text-primary"
      >
        Leaderboard {season}
      </Text>
      <Text
        variant="h5-bold"
        display={{ ml: "block", initial: "none" }}
        color="text-primary"
      >
        Leaderboard {season}
      </Text>
      {renderLeaderboard()}
    </Box>
  );
};

export { LeaderBoardSection };
