import { useState } from "react"
import { css } from "styled-components"

import { ActvityType } from "../../../queries/types"

import { Alert, Box, Text } from "../../../blocks"
import { RewardsActivityIcon } from "../../Rewards/RewardsActivity/RewardsActivityIcon"
import { RewardsActivityTitle } from "../../Rewards/RewardsActivity/RewardsActivityTitle"
import { ActivityButton } from "../../Rewards/RewardsActivity/ActivityButton"
import { device } from "../../../config/globals"
import { useActivityContext } from "../../../context/activityContext"

export const LoggedInCultUser = () => {
  const { refetch, isLoading, userDetails } = useActivityContext();
  const [errorMessage, setErrorMessage] = useState("");

  const discordActivity = {
    icon: "follow_push_on_discord",
    activityTitle: "Join [Push Chain Discord](https://discord.com/invite/pushchain) and verify",
    activityType: "follow_push_on_discord" as ActvityType,
    activityTypeId: "follow_push_on_discord",
  };

  return (
    <Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			textAlign="center"
			width="100%"
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
							You’ve bee chosen as a Push Cult Disciple. Will you answer the call?
					</Text>
			</Box>
			{errorMessage && (
				<Box width="100%" margin="spacing-sm spacing-none spacing-none spacing-none">
					<Alert variant="error" description={errorMessage} />
				</Box>
			)}
			<Box
				display="flex"
				flexDirection="column"
				width="100%"
				margin="spacing-sm spacing-none spacing-none spacing-none"
				gap="spacing-sm"
				css={css`
					z-index: 99999;
				`}
			>
				<Box
					display="flex"
					flexDirection={{ initial: "row", tb: "column" }}
					alignItems="center"
					padding="spacing-sm spacing-md"
					gap="spacing-xs"
					css={css`
						border-radius: var(--radius-md, 24px);
						border: 1px solid #fff;
						background: rgba(255, 255, 255, 0.75);
						box-sizing: border-box;
					`}
				>
					<RewardsActivityIcon type={discordActivity.icon} />
					<RewardsActivityTitle
						activityTitle={discordActivity.activityTitle}
						variant="h4-semibold"
						isLoading={false}
						color="text-primary-inverse"
					/>
					<Box 
						css={css`
							margin-left: auto;
							@media ${device.tablet} {
								margin-left: unset;
							}
						`}
					>
						<ActivityButton
							activityType={discordActivity.activityType}
							activityTypeId={discordActivity.activityTypeId}
							userId={userDetails?.userId as string}
							refetchActivity={() => refetch()}
							setErrorMessage={setErrorMessage}
							isLoadingActivity={isLoading}
							label="Verify Discord"
						/>
					</Box>
				</Box>
			</Box>
    </Box>
  );
};
