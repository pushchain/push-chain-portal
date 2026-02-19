import { css } from "styled-components"
import { Box, Text, Copy } from "../../../blocks"
import { device } from "../../../config/globals"
import { fullCAIP10ToWallet, shortenText } from "../../../helpers/web3helper";
import { SquadsDetailsResponse } from "../../../queries/types/squads";

type SquadMemberItem = SquadsDetailsResponse['data']['squadMembers'][number];

type MemberRowProps = {
  member: SquadMemberItem;
  isHighlighted: boolean;
  onCopyAddress?: (address: string) => void;
}

const MemberRow = ({ member, isHighlighted, onCopyAddress }: MemberRowProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap="spacing-xs"
      width="100%"
      padding="spacing-none"
      css={css`
        &:hover .copy-icon {
          opacity: 1;
        }
      `}
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
              color: ${isHighlighted ? '#C742DD' : '#fff'};
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

            <Box
              className="copy-icon"
              display="flex"
              alignItems="center"
              cursor="pointer"
              onClick={() => onCopyAddress?.(member.user.userWallet)}
              css={css`
                opacity: 0;
                transition: opacity 0.15s ease;
              `}
            >
              <Copy size={16} color="icon-brand-medium" />
            </Box>
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
  members: SquadMemberItem[];
  leaderId?: string;
  currentUserId?: string;
}

export const SquadMembersTable = ({ members, leaderId, currentUserId }: SquadMembersTableProps) => {
  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
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
        {[...(members || [])]
          .sort((a, b) => (a.userId === leaderId ? -1 : b.userId === leaderId ? 1 : 0))
          .map((member, index) => (
            <MemberRow
              key={index}
              member={member}
              isHighlighted={member.userId === leaderId || member.userId === currentUserId}
              onCopyAddress={handleCopy}
            />
          ))}
      </Box>
    </Box>
  );
};
