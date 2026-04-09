import { css } from "styled-components";
import { Box } from "../../blocks"
import { CultFooter } from "./CultFooter"
import { CultHeader } from "./CultHeader"

export const Cult = () => {

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
			</Box>
		</Box>
  )
}
