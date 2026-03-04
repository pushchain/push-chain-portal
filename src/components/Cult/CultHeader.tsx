import { css } from "styled-components"
import { Box, Text } from "../../blocks"
import { usePushWalletContext } from "@pushchain/ui-kit"
import CultImage from "../../../static/assets/website/cult/cult.png"
import { useGetUserCultStatus } from "../../queries"
import { walletToFullCAIP10 } from "../../helpers/web3helper"
import { LoggedInCultUser } from "./components/LoggedInCultUser"
import { LoggedInVerifiedUser } from "./components/LoggedInVerifiedUser"
import { LoggedInUnverifiedUser } from "./components/LoggedInUnverifiedUser"
import { useActivityContext } from "../../context/activityContext"

export const CultHeader = () => {
	const { isVerified } = useActivityContext();

	const { universalAccount } = usePushWalletContext('wallet1');

	const isWalletConnected = Boolean(universalAccount?.address);

	const caip10WalletAddress = walletToFullCAIP10(
		universalAccount?.address as string,
		universalAccount?.chain,
	);

	const { data: userCultStatus } = useGetUserCultStatus({
		wallet: caip10WalletAddress
	});

	const isCultUser = userCultStatus?.data?.isCultMember;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      borderRadius="radius-md"
      css={css`
        flex: 1;
				border: 1px solid rgba(171, 70, 248, 0.40);
				background: rgba(0, 0, 0, 0.10);
				background-blend-mode: plus-lighter;
				box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
				backdrop-filter: blur(10px);
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        borderRadius="radius-md"
        padding="spacing-md"
        overflow="hidden"
        width="100%"
        css={css`
          background: linear-gradient(180deg, #010101 39.5%, #D548EC 100%);
          box-sizing: border-box;
					min-height: 406px;
        `}
      >

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          css={css`
            position: relative;
            z-index: 1;
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            gap="spacing-lg"
            css={css`
              width: 100%;
            `}
          >
						<img src={CultImage} alt="Cult Logo" width="316px" height="123px" />
						{isWalletConnected && isCultUser && !isVerified && (
							<LoggedInCultUser />
						)}
						{isWalletConnected && isCultUser && isVerified && (
							<LoggedInVerifiedUser />
						)}
						{!isCultUser && (
							<LoggedInUnverifiedUser />
						)}
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="spacing-xxxs"
        css={css`
          padding: var(--spacing-xs) var(--spacing-md);
          cursor: pointer;
        `}
      >
        <Text variant="h5-regular" color='#FFFFFF'>
          Disciples will be granted access to the secret cult channel after registering
        </Text>
      </Box>
    </Box>
  )
}
