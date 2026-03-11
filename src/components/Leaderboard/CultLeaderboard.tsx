// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from "react";
import { css } from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

import { Box, Spinner } from "../../blocks";
import { LeaderboardHeader } from "./Header/LeaderboardHeader";
import { LeaderBoardNullState } from "./List/LeaderboardNullState";
import { CultLeaderboardColumns } from "./Cult/CultLeaderboardColumns";
import { CultLeaderboardItem } from "./Cult/CultLeaderboardItem";
import { useGetCultLeaderboard, CultLeaderboardUser } from "../../queries";
import Footer from "../../structure/Footer";
import { device } from "../../config/globals";

const CultLeaderboard: FC = () => {
  const {
    data,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetCultLeaderboard({ pageSize: 20 });

  const leaderboardList = isLoading
    ? Array(10).fill(0)
    : data?.pages.flatMap((page) => page.users) || [];

  const hasMoreData = !isFetchingNextPage && hasNextPage;

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      height={{ initial: "calc(100vh - 130px)", ml: "calc(100vh - 80px)" }}
      css={css`
        margin: var(--spacing-md) auto;
        box-sizing: border-box;
        position: relative;

        @media ${device.tablet} {
          margin: var(--spacing-none) auto;
        }
      `}
    >
      <Box css={css`position: relative; z-index: 2;`}>
        <LeaderboardHeader title="Cult Leaderboard" />
      </Box>

      <Box
        padding="spacing-md"
        overflow="hidden"
        width={{ ml: "100%" }}
        css={css`
          box-sizing: border-box;
          margin-top: -20px;
          position: relative;
          z-index: 1;
          border-radius: 0 0 32px 32px;
          border: 1px solid rgba(171, 70, 248, 0.40);
          background: rgba(0, 0, 0, 0.10);
          background-blend-mode: plus-lighter;
          box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
          backdrop-filter: blur(10px);
        `}
      >
        {!leaderboardList.length ? (
          <LeaderBoardNullState
            refetchLeaderboard={isError ? refetch : undefined}
            heading="No Users Found"
            error={isError}
            subHeading={isError ? "Please refresh to view the Leaderboard" : ""}
          />
        ) : (
          <Box margin="spacing-sm spacing-none spacing-none spacing-none" gap="spacing-sm" display="flex" flexDirection="column">
            <CultLeaderboardColumns />
            <Box
              height="calc(100vh - 356px)"
              customScrollbar={true}
              css={css`
                overflow: scroll;
                overflow-x: hidden;
              `}
            >
              <InfiniteScroll
                pageStart={0}
                loadMore={() => fetchNextPage()}
                hasMore={hasMoreData}
                useWindow={false}
                threshold={150}
              >
                {leaderboardList.map((item: CultLeaderboardUser, index: number) => (
                  <CultLeaderboardItem
                    key={`${index}`}
                    rank={item.rank}
                    userWallet={item.userWallet}
                    totalPoints={item.totalScore}
                    isLoading={isLoading}
                  />
                ))}

                {isFetchingNextPage && (
                  <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    margin="spacing-sm spacing-none"
                  >
                    <Spinner size="medium" variant="primary" />
                  </Box>
                )}
              </InfiniteScroll>
            </Box>
          </Box>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default CultLeaderboard;
