import { css } from "styled-components"
import { usePushWalletContext } from "@pushchain/ui-kit"

import { useGetAllInvites, useGetSeasonThreeUserByWallet, useGetSquadsDetails, useRequestInviteCode } from "../../queries"
import { walletToFullCAIP10 } from "../../helpers/web3helper"
import { useAuthHeaders } from "../../context/authHeadersContext"

import { device } from "../../config/globals"
import { ReferralStats, ReferralProgram, InviteCodes } from "./Referral"
import { SquadSection } from "./SquadDetails"
import { Box, Link, Text } from "../../blocks"
import { useEffect } from "react"


export const Squads = () => {
  const { universalAccount } = usePushWalletContext();
  const { authHeaders } = useAuthHeaders();

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );
  const { data: seasonThreeDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  });

  const { data: squadsDetails } = useGetSquadsDetails(authHeaders);
  const { data: inviteCodeDetails, refetch } = useGetAllInvites(authHeaders);
  const { mutate: requestForInviteCode, isPending: isFetchingInviteCode } = useRequestInviteCode();

  const requestInvitesCode = () => {
    requestForInviteCode(
      {
        payload: {
          count: 5
        },
        authHeaders
      },
      {
        onSuccess: (response) => {
          console.log(response)
          refetch();

        },
        onError: (error: any) => {
          console.log("Error in creating activity", error);
        },
      },
    );
  }


  const handleCopyAddress = (address: string) => {
    console.log(`Copied address: ${address}`);
    // You can add toast notification here
  };

  const handleInviteMembers = () => {
    console.log('Invite members clicked');
    // You can open a modal or navigate to invite page
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
      width="100%"
      height="auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        padding="spacing-md"
        borderRadius="radius-lg"
        width="100%"
        css={css`
          border: 1px solid rgba(171, 70, 248, 0.4);
          background: rgba(0, 0, 0, 0.1);
          background-blend-mode: plus-lighter;
          box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset,
                      1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
          backdrop-filter: blur(10px);
          box-sizing: border-box;
        `}
      >
        <Box
          display="flex"
          flexDirection={{ initial: "row", tb: "column" }}
          gap="spacing-md"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-md"
            css={css`
              flex: 1;
              min-width: 0;

              @media ${device.tablet} {
                width: 100%;
              }
            `}
          >
            <ReferralStats
              totalActiveReferrals={ inviteCodeDetails?.data?.stats.used ?? '-' }
              pointsEarned={ seasonThreeDetails?.referralPoints ?? '-' }
            />
            <ReferralProgram />
          </Box>

          <Box
            css={css`
              flex: 1;
              min-width: 0;

              @media ${device.tablet} {
                width: 100%;
              }
            `}
          >
            <InviteCodes
              requestInvitesCode={ requestInvitesCode }
              isFetchingInviteCode={ isFetchingInviteCode }
            />
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        padding="spacing-md"
        borderRadius="radius-lg"
        width="100%"
        css={css`
          border: 1px solid rgba(171, 70, 248, 0.4);
          background: rgba(0, 0, 0, 0.1);
          background-blend-mode: plus-lighter;
          box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset,
                      1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
          backdrop-filter: blur(10px);
          box-sizing: border-box;
        `}
      >
        <SquadSection
          squadData={squadsDetails}
          onInviteMembers={handleInviteMembers}
          onCopyAddress={handleCopyAddress}
        />
      </Box>

      <Box
        width="100%"
        padding="spacing-none"
        css={css`
          z-index: 999;
          margin-bottom: 24px;
          `}
      >
        <Text
          variant='h5-regular'
          textAlign='center'>
            Find and Join a squad on #s3squad channel via
            <Link
              to="https://discord.com/invite/pushchain"
              textProps={{ variant: "bm-semibold", color: "#C742DD" }}
            >
              {' '}Push Chain Discord{' '}
            </Link>
        </Text>
      </Box>
    </Box>
  );
};
