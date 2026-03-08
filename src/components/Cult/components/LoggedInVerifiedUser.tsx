import { css } from "styled-components"

import { Box, Text } from "../../../blocks"
import { device } from "../../../config/globals"

export const LoggedInVerifiedUser = () => {

  return (
    <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap="spacing-lg"
    >
        <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                // css={css`
                //     max-width: 720px;
                // `}
        >
            
                <Text
                        variant="h2-bold"
                        css={css`
                                background: linear-gradient(180deg, #FFFFFF 43.49%, #F097FF 90.32%);
                                background-clip: text;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                font-size: 40px !important;

                                @media ${device.mobileL} {
                                                font-size: 40px;
                                                line-height: 45px;
                                }
                        `}
                >
                        Your faith has been verified.
                </Text>

                <Text variant="h4-regular" color="#FFFFFF">
                        Join #push-cult channel on Discord and await further instructions
                </Text>
        </Box>
    </Box>
  );
};
