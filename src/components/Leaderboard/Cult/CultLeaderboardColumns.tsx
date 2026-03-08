// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC } from "react";
import { css } from "styled-components";
import { Box, Text } from "../../../blocks";

const CultLeaderboardColumns: FC = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" gap="spacing-xs">
        <Text variant="c-bold" color="text-tertiary">
          RANK
        </Text>
        <Text
          variant="c-bold"
          color="text-tertiary"
          css={css`
            margin-left: 30px;
          `}
        >
          USER
        </Text>
      </Box>
      <Box display="flex" gap="spacing-xs">
        <Text variant="c-bold" color="text-tertiary">
          USER ID
        </Text>
        <Text
          variant="c-bold"
          color="text-tertiary"
          css={css`
            margin-left: 30px;
          `}
        >
          TOTAL POINTS
        </Text>
      </Box>
    </Box>
  );
};

export { CultLeaderboardColumns };
