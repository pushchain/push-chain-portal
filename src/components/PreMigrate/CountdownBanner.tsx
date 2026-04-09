import { css } from "styled-components";
import { Box, Button, Text } from "../../blocks";

export const CountdownBanner = () => (
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    padding="spacing-md"
    width="100%"
    css={css`
      background: #202124;
      border-radius: 24px;
      box-sizing: border-box;
    `}
  >
    <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xs">
      <Text variant="h3-semibold" color="text-primary">
        $PUSH Pre-Migration ends in
      </Text>
      <Text variant="h3-semibold" color="text-primary">
        24D : 10H : 59M : 12S
      </Text>
    </Box>
    <Button variant="tertiary" size="medium">
      Learn More
    </Button>
  </Box>
);
