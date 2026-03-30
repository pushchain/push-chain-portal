import { useNavigate } from "react-router-dom"
import { css } from "styled-components"

import useMediaQuery from "../../hooks/useMediaQuery"
import { device } from "../../config/globals"
import { useCountdown } from "../Rewards/hooks/useCountdown"

import { Box, GlowStreaks, Text } from "../../blocks"


export const Countdown = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const navigate = useNavigate();

	const targetDate = "2026-04-07T13:59:59";
  const { timeLeft } = useCountdown(targetDate);

  const handleGoToCult = () => {
    navigate('/cult')
  }

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
				height="528px"
        css={css`
          background: #F1D5FF;
          box-sizing: border-box;
        `}
      >
        <Box
          css={css`
            position: absolute;
            bottom: -50px;
            left: -50px;
            width: 230px;
            height: 230px;
            pointer-events: none;
            z-index: 0;
            background: #E58CF6;
            filter: blur(50px);
          `}
        />

        <>
        <Box css={css`position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: 150px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: 0px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        {!isMobile && (<>
        <Box css={css`position: absolute; bottom: 0; right: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end; justify-content: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; right: 150px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end; justify-content: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>
        </>)}
        </>

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
						gap="spacing-md"
            css={css`
              max-width: 824px;
              margin: 32px 0px;
            `}
          >
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center"
							textAlign="center"
							css={css`
								max-width: 720px;
							`}
						>
							<Text
								variant="h1-bold"
								css={css`
									background: linear-gradient(180deg, #000 43.49%, #7D238C 90.32%);
									background-clip: text;
									-webkit-background-clip: text;
									-webkit-text-fill-color: transparent;

									@media ${device.mobileL} {
											font-size: 40px;
											line-height: 45px;
									}
								`}
							>
								Season 3 is coming!
							</Text>

							<Text variant="h4-regular" color="#000000">
								Brace yourselves. You are about to see the raw, unfiltered power of Push
								Chain and the network we are building.
							</Text>
						</Box>


						<Text variant="ds-bold" color="#C742DD">
              {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S
            </Text>
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
        <Text variant="h5-regular">
          Invited to be a part of Push Cult?
        </Text>
				<Text
					variant="h5-bold"
					color="#C742DD"
					onClick={handleGoToCult}
					css={css`
						cursor: pointer;
					`}
				>
					Connect and Get Started Here
				</Text>
      </Box>
    </Box>
  )
}
