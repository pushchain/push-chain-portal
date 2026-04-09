import { useState } from "react";
import { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";

import { useGetAllInvites, useGetSeasonThreeUserByWallet, useGetUserCultStatus } from "../../../queries";
import { device } from "../../../config/globals";

import { Box, Text, Copy, Button, Skeleton } from "../../../blocks"
import { trackEvent } from "../../../helpers/analytics"
import { walletToFullCAIP10 } from "../../../helpers/web3helper";


type InviteCodeRowProps = {
  code: string;
  isUsed: boolean;
  copiedCode: string | null;
  onCopy: (code: string, e: React.MouseEvent) => void;
}

const InviteCodeRow = ({ code, isUsed, copiedCode, onCopy }: InviteCodeRowProps) => {
  const isAvailable = !isUsed;
  const isCopied = copiedCode === code;




  return (
    <Box
      display="flex"
      alignItems="center"
      gap="spacing-xs"
      width="100%"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="spacing-xs spacing-sm"
        borderRadius="radius-xs"
        css={css`
          flex: 1;
          background: rgba(0, 0, 0, 0.8);
        `}
      >
        <Text
          variant="bs-semibold"
          css={css`
            color: ${isAvailable ? '#fff' : 'rgba(255, 255, 255, 0.25)'};
          `}
        >
          {code}
        </Text>

        {isAvailable && (
          <Box
            display="flex"
            alignItems="center"
            gap="spacing-xxxs"
            cursor="pointer"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              onCopy(code, e);
            }}
            css={css`
              user-select: none;
              z-index: 1;
            `}
          >
            <Copy size={16} color={isCopied ? "icon-state-success-bold" : "icon-brand-medium"} />
            <Text
              variant="bs-semibold"
              color={isCopied ? "text-state-success-bold" : "text-brand-medium"}
            >
              {isCopied ? 'Copied' : 'Copy Code'}
            </Text>
          </Box>
        )}
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        css={css`
          min-width: 85px;
        `}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="spacing-xxxs spacing-xs"
          borderRadius="radius-xxxs"
          css={css`
            background: ${isAvailable ? '#f6caff' : '#000'};
          `}
        >
          <Text
            variant="os-bold"
            css={css`
              color: ${isAvailable ? '#aa2fbe' : 'rgba(255, 255, 255, 0.25)'};
              text-transform: uppercase;
              font-size: 10px;
            `}
          >
            {isAvailable ? 'Available' : 'Claimed'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

type InviteCodesProps = {
  requestInvitesCode: () => void;
  isFetchingInviteCode: boolean;
  isSigning?: boolean;
}

export const InviteCodes = ({ requestInvitesCode, isFetchingInviteCode, isSigning }: InviteCodesProps) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const { connectionStatus, universalAccount } = usePushWalletContext('wallet1');
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );
  const { data: userDetails } = useGetSeasonThreeUserByWallet({ walletAddress: caip10WalletAddress });
  const { data: inviteCodeDetails, isLoading, isSuccess } = useGetAllInvites(userDetails?.userId);

 const { data: userCultStatus } = useGetUserCultStatus({
		wallet: caip10WalletAddress
	});

 const isWalletConnected = Boolean(universalAccount?.address);
  const isCultUser = userCultStatus?.data?.isCultMember;

  const handleCopy = async (code: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    await navigator.clipboard.writeText(code);
    setCopiedCode(code);
    trackEvent('invite_code_copied', { event_category: 'invites', event_label: code });
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      padding="spacing-md"
      borderRadius="radius-md"
      position="relative"
      width="100%"
      css={css`
        box-sizing: border-box;
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
        min-height: 100%;

        @media ${device.mobileL} {
          min-height: 300px;
        }


        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: rgba(255, 255, 255, 0.10);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}
    >
      <Box
        display="flex"
        alignItems="center"
        gap="spacing-xs"
        width="100%"
        css={css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          padding-bottom: var(--spacing-sm);
        `}
      >
        <Box css={css`flex: 1;`}>
          <Text
            variant="h5-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            Invite Code
          </Text>
        </Box>
        <Box css={css`min-width: 85px; text-align: center;`}>
          <Text
            variant="h5-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            Status
          </Text>
        </Box>
      </Box>


      <Box
        display="flex"
        flexDirection="column"
        css={css`
            flex: 1;
            width: 100%;
          `}
      >
        {isWalletConnected ? (
          <>
            {(isLoading || !isSuccess) && (
              <Box
                display="flex"
                flexDirection="column"
                gap="spacing-xs"
                width="100%"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} isLoading>
                    <Box css={css`
                      width: 100%;
                      height: 40px;
                    `} />
                  </Skeleton>
                ))}
              </Box>
            )}
          </>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            css={css`
              width: 100%;
              height: 100%;
            `}
          >
            <Text variant="h1-bold" color="text-primary">-</Text>
          </Box>
        )}

        {!isLoading && isSuccess && !inviteCodeDetails?.data?.invites?.length && connectionStatus === "connected" && !isCultUser && (
          <Button
            variant="outline"
            size="extraSmall"
            onClick={() => requestInvitesCode()}
            loading={isFetchingInviteCode || isSigning}
            disabled={isFetchingInviteCode || isSigning}
            css={css`
              margin: auto auto;
              cursor: pointer;
            `}
          >
            Get Invite Codes
          </Button>
        )}

        {!isLoading && isWalletConnected && isCultUser && (
          <Button
            variant="primary"
            size="small"
            onClick={() => requestInvitesCode()}
            loading={isFetchingInviteCode || isSigning}
            disabled={isFetchingInviteCode || isSigning}
            css={css`
              margin: 0 auto auto auto;
              cursor: pointer;
              width: 100%;
            `}
          >
            Generate Invite Code
          </Button>
        )}

        <Box
          display="flex"
          flexDirection="column"
          gap="spacing-xs"
          customScrollbar
          css={css`
            overflow-y: auto;
            max-height: ${isCultUser ? '200px' : '260px'};
          `}
        >
          {isSuccess && (isCultUser
            ? inviteCodeDetails?.data?.invites
            : inviteCodeDetails?.data?.invites?.slice(0, userDetails?.level >= 10 ? 5 : 3)
          )?.map((invite, index) => (
            <InviteCodeRow
              key={index}
              code={invite.code}
              isUsed={invite.isUsed}
              copiedCode={copiedCode}
              onCopy={handleCopy}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
