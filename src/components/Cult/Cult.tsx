import { css } from "styled-components";
import { Box, Text } from "../../blocks"
import { useCountdown } from "../Rewards/hooks/useCountdown";
import { CultFooter } from "./CultFooter"
import { CultHeader } from "./CultHeader"

export const Cult = () => {
	const targetDate = "2026-03-17T13:59:59";
	const { timeLeft } = useCountdown(targetDate);

  return (
		<Box
			display="flex"
			flexDirection="column"
			gap="spacing-lg"
			alignItems="center"
			css={css`
				margin-top: 24px;
			`}
		>
			<CultHeader />
			<CultFooter />
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				css={css`
					z-index: 1;
				`}
			>
				<Text variant="h4-bold" color="#FFFFFF">
					Season 3 dropping soon!
				</Text>
				<Text variant="h1-regular" color="#FFFFFF">
					{timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S
				</Text>
			</Box>
		</Box>
  )
}
