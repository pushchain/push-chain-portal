import { useState } from "react";
import { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useNavigate } from "react-router-dom";

import { device } from "../../config/globals";
import {
  useGetCharacterInfo,
  useGenerateCharacter,
  useReshuffleCharacter,
  useMintCharacter,
} from "../../queries";

import OpenPassImage from "../../../static/assets/website/pushpass/OpenPass.webp";
import { Back, Box, Button, Spinner, Text, Twitter } from "../../blocks";
import { Image } from "../../css/SharedStyling";
import { OtterCharacter, generateRandomCharacterId } from "./OtterCharacter";

type PassState = "loading" | "unopened" | "opened" | "minted";

const DEMO_MODE = true;

const getPassState = (
  isLoading: boolean,
  data?: { eligible: boolean; assigned: boolean; characterId: string | null }
): PassState => {
  if (isLoading) return "loading";
  if (!data?.assigned) return "unopened";
  if (data?.characterId) return "opened";
  return "unopened";
};

export const PushPassItem = () => {
  const navigate = useNavigate();
  const { universalAccount } = usePushWalletContext();

  const [demoState, setDemoState] = useState<{
    passState: PassState;
    characterId: string | null;
    isMinted: boolean;
  }>({
    passState: "unopened",
    characterId: null,
    isMinted: false,
  });
  const [isActionLoading, setIsActionLoading] = useState(false);

  const { data: characterInfo, isLoading } = useGetCharacterInfo({
    walletAddress: universalAccount?.address,
  });

  const generateCharacter = useGenerateCharacter();
  const reshuffleCharacter = useReshuffleCharacter();
  const mintCharacter = useMintCharacter();

  const passState = DEMO_MODE ? demoState.passState : getPassState(isLoading, characterInfo);
  const characterId = DEMO_MODE ? demoState.characterId : characterInfo?.characterId;
  const isMinted = DEMO_MODE
    ? demoState.isMinted
    : characterInfo?.characterId && characterInfo?.assigned;

  const handleOpenPass = () => {
    if (DEMO_MODE) {
      setIsActionLoading(true);
      setTimeout(() => {
        const newCharacterId = generateRandomCharacterId();
        setDemoState({
          passState: "opened",
          characterId: newCharacterId,
          isMinted: false,
        });
        setIsActionLoading(false);
      }, 1500);
      return;
    }

    if (!universalAccount?.address) return;
    generateCharacter.mutate({ walletAddress: universalAccount.address });
  };

  const handleReshuffle = () => {
    if (DEMO_MODE) {
      setIsActionLoading(true);
      setTimeout(() => {
        const newCharacterId = generateRandomCharacterId();
        setDemoState((prev) => ({
          ...prev,
          characterId: newCharacterId,
        }));
        setIsActionLoading(false);
      }, 1000);
      return;
    }

    if (!universalAccount?.address) return;
    reshuffleCharacter.mutate({ walletAddress: universalAccount.address });
  };

  const handleMint = () => {
    if (DEMO_MODE) {
      setIsActionLoading(true);
      setTimeout(() => {
        setDemoState((prev) => ({
          ...prev,
          isMinted: true,
          passState: "minted",
        }));
        setIsActionLoading(false);
      }, 1500);
      return;
    }

    if (!universalAccount?.address) return;
    mintCharacter.mutate({ walletAddress: universalAccount.address });
  };

  const handleResetDemo = () => {
    setDemoState({
      passState: "unopened",
      characterId: null,
      isMinted: false,
    });
  };

  const actionLoading = DEMO_MODE
    ? isActionLoading
    : generateCharacter.isPending || reshuffleCharacter.isPending || mintCharacter.isPending;

  return (
    <Box
      padding="spacing-md"
      borderRadius="radius-md"
      width="100%"
      css={css`
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        border: 1px solid rgba(171, 70, 248, 0.4);
        background: rgba(0, 0, 0, 0.1);
        background-blend-mode: plus-lighter;
        box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset,
          1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(10px);
      `}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Button
          variant="outline"
          onClick={() => navigate("/rewards/pushpass")}
          css={css`
            border: none;
            &:hover {
              border: none;
            }
            @media ${device.tablet} {
              padding: 0px;
              min-width: auto;
            }
          `}
        >
          <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs">
            <Back
              css={css`
                color: #c742dd;
              `}
            />
            <Text
              variant="bm-bold"
              css={css`
                color: #c742dd;
              `}
            >
              Back
            </Text>
          </Box>
        </Button>

        {DEMO_MODE && (
          <Button variant="outline" size="small" onClick={handleResetDemo}>
            Reset Demo
          </Button>
        )}
      </Box>

      {passState === "loading" && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          css={css`
            margin: 80px 0px;
          `}
        >
          <Spinner size="large" />
        </Box>
      )}

      {passState === "unopened" && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Text
              variant="h2-semibold"
              css={css`
                background: linear-gradient(180deg, #fff 49.73%, #c968e7 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              Open & Claim your Rare Pass
            </Text>
            <Text
              variant="bm-regular"
              css={css`
                color: rgba(255, 255, 255, 0.75);
              `}
            >
              Crack open your rare pass to see what's inside.
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            gap="spacing-xl"
            css={css`
              margin: 40px 0px 120px 0px;
            `}
          >
            <Image src={OpenPassImage} alt="Open Pass" width={227} />

            <Button
              variant="primary"
              onClick={handleOpenPass}
              disabled={actionLoading || (!DEMO_MODE && !characterInfo?.eligible)}
            >
              {actionLoading ? <Spinner size="small" /> : "Open Pass"}
            </Button>

            {!DEMO_MODE && !characterInfo?.eligible && (
              <Text
                variant="bs-regular"
                css={css`
                  color: rgba(255, 255, 255, 0.5);
                `}
              >
                You are not eligible to open this pass yet.
              </Text>
            )}

            {!DEMO_MODE && generateCharacter.isError && (
              <Text
                variant="bs-regular"
                css={css`
                  color: #ff6b6b;
                `}
              >
                Failed to open pass. Please try again.
              </Text>
            )}
          </Box>
        </>
      )}

      {(passState === "opened" || passState === "minted") && characterId && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Text
              variant="h2-semibold"
              css={css`
                background: linear-gradient(180deg, #fff 49.73%, #c968e7 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              {isMinted ? "Your Rare Pass" : "Your Rare Pass has been revealed!"}
            </Text>
            <Text
              variant="bm-regular"
              css={css`
                color: rgba(255, 255, 255, 0.75);
              `}
            >
              {isMinted
                ? "This pass has been minted and locked forever."
                : "HODL onto your passes until the burn event and be one of the lucky few to get Eternal Rewards*"}
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            gap="spacing-md"
            css={css`
              margin: 40px 0px 60px 0px;
            `}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="spacing-sm"
              borderRadius="radius-md"
              css={css`
                background: #ececb4;
                width: 248px;
                height: 318px;
                aspect-ratio: 124/159;
              `}
            >
              <OtterCharacter characterId={characterId} width={248} height={318} />


            </Box>

            {!isMinted && (
              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-md"
                css={css`
                  margin-top: 24px;
                `}
              >
                <Button
                  variant="outline"
                  onClick={handleMint}
                  disabled={actionLoading}
                  css={css`
                    min-width: 140px;
                  `}
                >
                  {actionLoading ? <Spinner size="small" /> : "Confirm & Claim Pass"}
                </Button>

                <Button
                  variant="primary"
                  onClick={handleReshuffle}
                  disabled={actionLoading}
                  css={css`
                    min-width: 140px;
                  `}
                >
                  {!actionLoading && <Twitter width={20} height={20} />}
                  {actionLoading ? <Spinner size="small" /> : "Tweet to Reroll"}
                </Button>


              </Box>
            )}

            {!DEMO_MODE && (reshuffleCharacter.isError || mintCharacter.isError) && (
              <Text
                variant="bs-regular"
                css={css`
                  color: #ff6b6b;
                `}
              >
                {reshuffleCharacter.isError ? "Failed to reshuffle." : "Failed to mint."} Please try
                again.
              </Text>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};
