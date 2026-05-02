// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from "react";
import { Box, Text } from "../../../blocks";
import { css } from "styled-components";

const LeaderboardListColumns: FC = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" gap="spacing-xs">
        <Text variant="c-bold" color="text-tertiary">
          RANK
        </Text>
        <Text variant="c-bold" color="text-tertiary"
        css={css`
          margin-left: 30px;
          `}
        >
          USER
        </Text>
      </Box>
      <Box display="flex" gap="spacing-md" alignItems="center">
        <Text
          variant="c-bold"
          color="text-tertiary"
          display={{ ml: "none", initial: "block" }}
        >
          TOTAL RARE PASS
        </Text>
        <Text variant="c-bold" color="text-tertiary">
          TOTAL POINTS
        </Text>
      </Box>
    </Box>
  );
};

export { LeaderboardListColumns };
