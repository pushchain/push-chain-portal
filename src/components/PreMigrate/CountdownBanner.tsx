import { css } from "styled-components";
import { ArrowUpRight, Box, Button, Text } from "../../blocks";

export const CountdownBanner = () => (
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    padding="spacing-md"
    width="100%"
    css={css`
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
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
    <Button variant="tertiary" size="medium" trailingIcon={<ArrowUpRight size={16} />}>
      Learn More
    </Button>
  </Box>
);
