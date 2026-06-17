import { useState } from "react"
import { css } from "styled-components"
import { usePushWalletContext } from "@pushchain/ui-kit"

import { SquadHeader } from "./SquadHeader"
import { SquadLevelCard } from "./SquadLevelCard"
import { SquadStatsRow } from "./SquadStatsRow"
import { SquadMembersTable } from "./SquadMembersTable"
import { device } from "../../../config/globals"
import { useGetSquadsPendingInvites, useAcceptSquadInvite, useRejectSquadInvite, useGetSeasonThreeUserByWallet } from "../../../queries"
import { useAuthHeaders } from "../../../context/authHeadersContext";
import { walletToFullCAIP10 } from "../../../helpers/web3helper"
import { SquadsDetailsResponse } from "../../../queries/types/squads"

import { Box, Button, Link, SeasonThreeEllipse, Text } from "../../../blocks"
import { trackEvent } from "../../../helpers/analytics"


type SquadSectionProps = {
  squadData?: SquadsDetailsResponse;
  refetchSquadsDetails: () => void;
}

export const SquadSection = ({ squadData, refetchSquadsDetails }: SquadSectionProps) => {
  const { authHeaders, getAuthHeaders } = useAuthHeaders();
  const { universalAccount } = usePushWalletContext('wallet1');
  const [activeInviteId, setActiveInviteId] = useState<string | null>(null);
  const [isSigning, setIsSigning] = useState(false);

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: seasonThreeUserDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const { data: getSquadsPendingInvites, refetch: refetchPendingInvites } = useGetSquadsPendingInvites(seasonThreeUserDetails?.userId);
  const { mutate: acceptInvite, isPending: isAccepting } = useAcceptSquadInvite();
  const { mutate: rejectInvite, isPending: isRejecting } = useRejectSquadInvite();

  const handleAcceptInvite = async (inviteId: string) => {
    if (!authHeaders) setIsSigning(true);
    const headers = authHeaders ?? await getAuthHeaders();
    setIsSigning(false);
    if (!headers) return;
    setActiveInviteId(inviteId);
    trackEvent('squad_invite_accepted', { event_category: 'squads', event_label: inviteId });
    acceptInvite(
      { params: { inviteId }, authHeaders: headers },
      {
        onSuccess: () => {
          setActiveInviteId(null);
          refetchPendingInvites();
          refetchSquadsDetails();
        },
        onError: () => { setActiveInviteId(null); },
      }
    );
  };

  const handleDeclineInvite = async (inviteId: string) => {
    if (!authHeaders) setIsSigning(true);
    const headers = authHeaders ?? await getAuthHeaders();
    setIsSigning(false);
    if (!headers) return;
    setActiveInviteId(inviteId);
    trackEvent('squad_invite_declined', { event_category: 'squads', event_label: inviteId });
    rejectInvite(
      { params: { inviteId }, authHeaders: headers },
      {
        onSuccess: () => {
          setActiveInviteId(null);
          refetchPendingInvites();
          refetchSquadsDetails();
        },
        onError: () => { setActiveInviteId(null); },
      }
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      width="100%"
    >
      <SquadHeader squadData={squadData} />

      {!squadData &&
        getSquadsPendingInvites?.data?.length > 0 &&
        getSquadsPendingInvites.data.map((invite) => (
          <Box
            key={invite.id}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="spacing-lg"
            padding="spacing-md"
            borderRadius="radius-md"
            justifyContent="space-between"
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
            <Box>
              <Text
                color="rgba(255, 255, 255, 0.75)"
                variant="h4-semibold"
              >
                You have been invited to join{' '}
                <Text as="span" color="#fff" variant="h4-semibold">
                  {invite.squad.name}
                </Text>{' '}
                squad
              </Text>
              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-xs"
                alignItems="center">
                <Text variant="bs-semibold">Lv. {invite.squad.squadLevel}</Text> <SeasonThreeEllipse color="#fff" size={4} /> <Text variant="bs-semibold">{invite.squad.memberCount}/{invite.squad.maxMembers}</Text>
              </Box>
            </Box>

            <Box display="flex" flexDirection="row" gap="spacing-xs">
              <Button
                variant="outline"
                onClick={() => handleDeclineInvite(invite.id)}
                loading={(isRejecting && activeInviteId === invite.id) || isSigning}
                disabled={(isRejecting && activeInviteId === invite.id) || isSigning}
              >
                Decline
              </Button>
              <Button
                onClick={() => handleAcceptInvite(invite.id)}
                loading={(isAccepting && activeInviteId === invite.id) || isSigning}
                disabled={(isAccepting && activeInviteId === invite.id) || isSigning}
              >
                Accept Invite
              </Button>
            </Box>
          </Box>
        ))}

     {!squadData && !getSquadsPendingInvites?.data?.length &&
       <Box
        width="100%"
        minHeight="169px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text variant="bm-semibold" color="rgba(255, 255, 255, 0.25)">You are not a part of a squad yet.</Text>
        <Text variant="bm-semibold" color="rgba(255, 255, 255, 0.25)">
          Create a squad or find one on #s3squad channel via{" "}
          <Link
            to="https://discord.com/invite/pushchain"
            textProps={{ variant: "bm-semibold", color: "#C742DD" }}
          >
            Push Chain Discord.
          </Link>
        </Text>
      </Box>
     }


     {squadData &&
       <>
        <Box
          display="flex"
          flexDirection={{ initial: "row", tb: "column" }}
          gap="spacing-md"
          width="100%"
          height="100%"
        >
          <Box
            height="100%"
            css={css`
              flex-shrink: 0;
              min-width: 320px;
              box-sizing: border-box;

              @media ${device.tablet} {
                width: 100%;
                max-width: 100%;
              }
            `}
          >
            <SquadLevelCard
              squadName={squadData.data.name}
              totalXp={squadData.data.totalXPSquad}
            />
          </Box>

          <Box
            height="100%"
            css={css`
              flex: 1;
              min-width: 0;
              `}>
            <SquadStatsRow
              totalMembers={squadData?.data.memberCount}
              maxMembers={squadData?.data.maxMembers}
              spinLuckBonus={squadData?.data.squadLuckProb}
              xpCollected={squadData?.data.totalXPSquad}
            />
          </Box>
        </Box>

        <SquadMembersTable
          members={squadData?.data.squadMembers}
          leaderId={squadData?.data.leaderId}
          currentUserId={seasonThreeUserDetails?.userId}
        />
     </>}
    </Box>
  );
};
