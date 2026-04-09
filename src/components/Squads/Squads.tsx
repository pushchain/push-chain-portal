import { useState } from "react"
import { css } from "styled-components"
import { usePushWalletContext } from "@pushchain/ui-kit"

import { useGetAllInvites, useGetSeasonThreeUserByWallet, useGetSquadsDetails, useRequestInviteCode } from "../../queries"
import { walletToFullCAIP10 } from "../../helpers/web3helper"
import { useAuthHeaders } from "../../context/authHeadersContext"

import { device } from "../../config/globals"
import { ReferralStats, ReferralProgram, InviteCodes } from "./Referral"
import { SquadSection } from "./SquadDetails"
import { Box, Link, Text } from "../../blocks"
import { trackEvent } from "../../helpers/analytics"


export const Squads = () => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const { authHeaders, getAuthHeaders } = useAuthHeaders();
  const [isSigning, setIsSigning] = useState(false);

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );
  const { data: seasonThreeDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  });

  const { data: squadsDetails, refetch: refetchSquadsDetails } = useGetSquadsDetails(seasonThreeDetails?.userId);
  const { data: inviteCodeDetails, refetch } = useGetAllInvites(seasonThreeDetails?.userId);
  const { mutate: requestForInviteCode, isPending: isFetchingInviteCode } = useRequestInviteCode();

  const requestInvitesCode = async () => {
    if (!authHeaders) setIsSigning(true);
    const headers = authHeaders ?? await getAuthHeaders();
    setIsSigning(false);
    if (!headers) return;
    trackEvent('invite_code_generated', { event_category: 'invites' });
    requestForInviteCode(
      { payload: { count: 3 }, authHeaders: headers },
      {
        onSuccess: () => { refetch(); },
        onError: (error: Error) => { console.log("Error in creating activity", error); },
      },
    );
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
            minHeight="100%"
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
              isSigning={ isSigning }
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
          refetchSquadsDetails={refetchSquadsDetails}
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
            {seasonThreeDetails?.userId === squadsDetails?.data?.leaderId
              ? 'Recruit squad members by checking out #s3squad channel on '
              : 'Find and Join a squad on #s3squad channel via '}
            <Link
              to="https://discord.com/invite/pushchain"
              textProps={{ variant: "bm-semibold", color: "#C742DD" }}
            >
              Push Chain Discord
            </Link>
        </Text>
      </Box>
    </Box>
  );
};
