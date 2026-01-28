import { css } from "styled-components"
import { Box, Link, Text } from "../../../blocks"
import { SquadHeader } from "./SquadHeader"
import { SquadLevelCard } from "./SquadLevelCard"
import { SquadStatsRow } from "./SquadStatsRow"
import { SquadMembersTable } from "./SquadMembersTable"
import { device } from "../../../config/globals"

type SquadMember = {
  memberId: string;
  joinDate: string;
  xpCollected: number;
  isCurrentUser?: boolean;
}



type SquadSectionProps = {
  squadData: any;
  onInviteMembers?: () => void;
  onCopyAddress?: (address: string) => void;
}

export const SquadSection = ({ squadData, onInviteMembers, onCopyAddress }: SquadSectionProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      width="100%"
    >
      <SquadHeader onInviteMembers={onInviteMembers} />

     {!squadData &&
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

              @media ${device.tablet} {
                width: 100%;
                max-width: 100%;
              }
            `}
          >
            {/*<SquadLevelCard
              squadName={squadData.squadName}
              level={squadData.level}
              xpToLevelUp={squadData.xpToLevelUp}
              currentXp={squadData.currentXp}
            />*/}
          </Box>

          <Box
            height="100%"
            css={css`
              flex: 1;
              min-width: 0;
              `}>
            {/*<SquadStatsRow
              totalMembers={squadData?.data.memberCount}
              maxMembers={squadData?.data.maxMembers}
              spinLuckBonus={squadData.spinLuckBonus}
              xpCollected={squadData.xpCollected}
            />*/}
          </Box>
        </Box>

        <SquadMembersTable
          members={squadData?.data.squadMembers}
          onCopyAddress={onCopyAddress}
        />
     </>}
    </Box>
  );
};
