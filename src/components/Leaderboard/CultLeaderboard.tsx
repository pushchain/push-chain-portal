// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from "react";
import { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";

import { Box } from "../../blocks";
import { LeaderboardHeader } from "./Header/LeaderboardHeader";
import { LeaderBoardNullState } from "./List/LeaderboardNullState";
import { CultLeaderboardColumns } from "./Cult/CultLeaderboardColumns";
import { CultLeaderboardItem } from "./Cult/CultLeaderboardItem";
import { useGetCultLeaderboard, CultLeaderboardUser } from "../../queries";
import { walletToFullCAIP10, fullCAIP10ToWallet } from "../../helpers/web3helper";
import Footer from "../../structure/Footer";
import { device } from "../../config/globals";

const CultLeaderboard: FC = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );


  const {
    data,
    isError,
    refetch,
    isLoading,
  } = useGetCultLeaderboard({ pageSize: 100 });

  const leaderboardList = isLoading
    ? Array(10).fill(0)
    : (data?.pages.flatMap((page) => page.users) || []).slice(0, 100);

  // Find current user in loaded leaderboard data
  const currentUserEntry = !isLoading
    ? leaderboardList.find(
        (item: CultLeaderboardUser) =>
          item.userWallet && fullCAIP10ToWallet(item.userWallet)?.toLowerCase() === fullCAIP10ToWallet(caip10WalletAddress)?.toLowerCase()
      )
    : null;

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
        <LeaderboardHeader title="Top Cult Leaderboard" />
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
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
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
            <Box
              margin="spacing-sm spacing-none spacing-none spacing-none"
              display="flex"
              flexDirection="column"
              css={css`
                flex: 1;
                min-height: 0;
              `}>
            <CultLeaderboardColumns />

            {currentUserEntry && (
              <Box>
                <CultLeaderboardItem
                  rank={currentUserEntry.rank}
                  userId={currentUserEntry.userId}
                  userWallet={currentUserEntry.userWallet}
                  totalPoints={currentUserEntry.totalScore}
                  isLoading={false}
                  highlighted
                />
              </Box>
            )}

            <Box
              customScrollbar={true}
              css={css`
                flex: 1;
                min-height: 0;
                overflow: scroll;
                overflow-x: hidden;
              `}
            >
              {leaderboardList.map((item: CultLeaderboardUser, index: number) => {
                const showSeparator = !isLoading && index === 49 && leaderboardList.length > 50;

                return (
                  <Box key={`${index}`}>
                    <CultLeaderboardItem
                      rank={item.rank}
                      userId={item.userId}
                      userWallet={item.userWallet}
                      totalPoints={item.totalScore}
                      isLoading={isLoading}
                    />
                    {showSeparator && (
                      <Box
                        display="flex"
                        alignItems="center"
                        gap="spacing-xs"
                      >
                        <Box
                          css={css`
                            flex: 1;
                            height: 2px;
                            background: #D548EC;
                          `}
                        />
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default CultLeaderboard;
