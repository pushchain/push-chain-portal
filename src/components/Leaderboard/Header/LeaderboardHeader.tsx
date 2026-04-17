// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from "react";
import { css } from "styled-components";

import { Box, GlowStreaks, Text } from "../../../blocks";
import { device } from "../../../config/globals";

const LeaderboardHeader: FC = ({ title }) => {

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      width="100%"
      flexDirection={{ initial: "column", tb: "column" }}
      css={css`
            border-radius: 32px;
            border: 1px solid rgba(255, 255, 255, 0.40);
            background: #F1D5FF;
            padding: 50px 0px;
            box-sizing: border-box;
            overflow: hidden;
        `}
    >
      <Box css={css`
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        pointer-events: none;
        z-index: 0;
      `}>
        <Box css={css`position: absolute; bottom: 0; left: -150px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: -100px; left: 0px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: 0; left: 0px; width: 100%; height: 100%; pointer-events: none; z-index: 0; display: flex; align-items: flex-end;`}>
          <GlowStreaks />
        </Box>
      </Box>

      <Text css={css`
        background: linear-gradient(180deg, #000 29.25%, #7D238C 75%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px;
        position: relative;
        z-index: 1;
        `}>
          {title || `Top the Leaderboards`}
      </Text>

      <Text variant="h4-regular" textAlign="center" css={css`
            width: 660px;
            color: #000;
            position: relative;
            z-index: 1;

            @media ${device.tablet} {
                width: 100%;
            }
        `}>
        Rise up the leaderboards by sharing content and completing missions. Top 50 by the end of Cult Program will share a pool of 20M $PC Tokens.
      </Text>
    </Box>
  );
};

export { LeaderboardHeader };
