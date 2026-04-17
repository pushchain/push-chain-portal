// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { FC } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";
import {
  useGetRewardsLeaderboardS3,
  useGetSeasonThreeUserByWallet,
  ModelledLeaderBoardUser,
} from "../../../queries";
import { Box, Spinner } from "../../../blocks";

import { LeaderboardListItem } from "../List/LeaderboardListItem";

import { fullCAIP10ToWallet, walletToFullCAIP10 } from "../../../helpers/web3helper";
import { LeaderBoardNullState } from "../List/LeaderboardNullState";
import { LeaderboardListColumns } from "../List/LeaderboardListColumns";

const LeaderboardListS3: FC = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: currentUser } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const {
    data,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
  } = useGetRewardsLeaderboardS3({ pageSize: 20 });

  const leaderboardList = isLoading
    ? Array(10).fill(0)
    : data?.pages.flatMap((page) => page.users) || [];

  const hasMoreData = !isFetchingNextPage && hasNextPage;

  return !leaderboardList.length ? (
    <LeaderBoardNullState
      refetchLeaderboard={isError ? refetch : undefined}
      heading="No Users Found"
      error={isError}
      subHeading={isError ? "Please refresh to view the Leaderboard" : ""}
    />
  ) : (
    !!leaderboardList.length && (
      <Box display="flex" flexDirection="column">
          <LeaderboardListColumns />

          {currentUser?.userId && (
            <Box>
              <LeaderboardListItem
                rank={currentUser.rank}
                address={fullCAIP10ToWallet(currentUser.userWallet)}
                points={currentUser.totalPoints}
                isLoading={false}
                userWallet={currentUser.userWallet}
                highlighted
              />
            </Box>
          )}
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
            {leaderboardList.map(
              (item: ModelledLeaderBoardUser, index: number) => (
                <LeaderboardListItem
                  key={`${index}`}
                  rank={item.rank}
                  address={fullCAIP10ToWallet(item.userWallet)}
                  points={item.totalPoints}
                  isLoading={isLoading}
                  userWallet={item.userWallet}
                />
              ),
            )}

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
    )
  );
};

export { LeaderboardListS3 };
