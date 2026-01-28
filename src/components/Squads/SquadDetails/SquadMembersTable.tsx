import { css } from "styled-components"
import { Box, Text, Copy } from "../../../blocks"
import { device } from "../../../config/globals"
import { fullCAIP10ToWallet, shortenText } from "../../../helpers/web3helper";

type SquadMember = {
  memberId: string;
  joinDate: string;
  xpCollected: number;
  isCurrentUser?: boolean;
}

type MemberRowProps = {
  member: SquadMember;
  onCopyAddress?: (address: string) => void;
}

const MemberRow = ({ member, onCopyAddress }: MemberRowProps) => {


  return (
    <Box
      display="flex"
      alignItems="center"
      gap="spacing-xs"
      width="100%"
      padding="spacing-xs spacing-none"
    >
      <Box
        display="flex"
        alignItems="center"
        gap="spacing-xs"
        css={css`
          flex: 2;
          min-width: 0;
        `}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="spacing-xs"
          padding="spacing-xs spacing-sm"
          borderRadius="radius-xs"
          css={css`
            flex: 1;
            min-width: 0;
          `}
        >
          <Text
            variant="bs-semibold"
            css={css`
              color: ${member.isCurrentUser ? 'var(--text-brand-medium)' : '#fff'};
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

              @media ${device.mobileL} {
                font-size: 12px;
              }
            `}
          >
            <span>{shortenText(fullCAIP10ToWallet(member.user.userWallet), 9)}</span>
          </Text>

          {member.isCurrentUser && (
            <Box
              display="flex"
              alignItems="center"
              cursor="pointer"
              onClick={() => onCopyAddress?.(member.memberId)}
            >
              <Copy size={16} color="icon-brand-medium" />
            </Box>
          )}
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        css={css`
          flex: 1;

          @media ${device.mobileL} {
            display: none;
          }
        `}
      >
        <Text
          variant="bs-semibold"
          color="text-primary"
          css={css`text-align: center;`}
        >
          {new Date(member.joinedAt).toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Text>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        css={css`
          flex: 1;
          min-width: 100px;
        `}
      >
        <Text
          variant="bs-semibold"
          color="text-primary"
          css={css`text-align: right;`}
        >
          {member.user.xp.toLocaleString()} XP
        </Text>
      </Box>
    </Box>
  );
};

type SquadMembersTableProps = {
  members: SquadMember[];
  onCopyAddress?: (address: string) => void;
}

export const SquadMembersTable = ({ members, onCopyAddress }: SquadMembersTableProps) => {
  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    onCopyAddress?.(address);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Box
        display="flex"
        alignItems="center"
        gap="spacing-xs"
        width="100%"
        padding="spacing-none spacing-none spacing-sm spacing-none"
        css={css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        `}
      >
        <Box css={css`flex: 2;`}>
          <Text
            variant="h5-semibold"
            css={css`
              color: rgba(255, 255, 255, 0.75);
              padding-left: var(--spacing-sm);
            `}
          >
            Member ID
          </Text>
        </Box>
        <Box
          css={css`
            flex: 1;
            text-align: center;

            @media ${device.mobileL} {
              display: none;
            }
          `}
        >
          <Text
            variant="h5-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            Join Date
          </Text>
        </Box>
        <Box css={css`flex: 1; text-align: right;`}>
          <Text
            variant="h5-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            XP Collected
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xxxs"
        css={css`padding-top: var(--spacing-xs);`}
      >
        {members?.map((member, index) => (
          <MemberRow
            key={index}
            member={member}
            onCopyAddress={handleCopy}
          />
        ))}
      </Box>
    </Box>
  );
};
