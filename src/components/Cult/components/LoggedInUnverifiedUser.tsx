import { css } from "styled-components"
import { PushUniversalAccountButton, usePushWalletContext } from "@pushchain/ui-kit"
import { Alert, Box, Text } from "../../../blocks"
import { device } from "../../../config/globals"

export const LoggedInUnverifiedUser = ({ isCultUser, isLoading }: { isCultUser: boolean | undefined, isLoading: boolean | undefined }) => {
  const { universalAccount } = usePushWalletContext('wallet1');
  const isWalletConnected = Boolean(universalAccount?.address);

  const isLoggedInAndNotCultUser = isWalletConnected && !isCultUser && !isLoading;


  return (
    <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            width="100%"
            gap="spacing-lg"
    >
        <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
                css={css`
                    max-width: 824px;
                `}
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
                        Awaken Disciple, Push Cult Welcomes You.
                </Text>

                <Text variant="h4-regular" color="#FFFFFF">
                        You’ve been chosen as a Push Cult Disciple. Will you answer the call?
                </Text>

          {isLoggedInAndNotCultUser && (<Box width="100%" margin="spacing-md spacing-none spacing-none spacing-none">
           <Alert description="You have not been chosen as a cult disciple." variant="error" />
          </Box>)}
      </Box>

      <Box>
            <PushUniversalAccountButton uid="wallet1" />
        </Box>
    </Box>
  );
};
