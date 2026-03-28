import { useState } from "react";
import { css } from "styled-components";
import { usePushWalletContext, usePushChainClient } from "@pushchain/ui-kit";
import { useNavigate, useParams } from "react-router-dom";

import { device } from "../../config/globals";
import {
  useGetCharacterInfo,
  useGenerateCharacter,
  useReshuffleCharacter,
  useMintCharacter,
  useGetNextReshuffleFee,
} from "../../queries";
import { CharacterInfoResponse } from "../../queries/types/character";

import OpenPassImage from "../../../static/assets/website/pushpass/OpenPass.webp";
import { Back, Box, Button, Spinner, Text, Twitter } from "../../blocks";
import { Image } from "../../css/SharedStyling";
import { CharacterImage } from "./CharacterImage";
import { walletToFullCAIP10 } from "../../helpers/web3helper";

type PassState = "loading" | "unopened" | "opened" | "minted";

const getPassState = (
  isLoading: boolean,
  characterId: string | undefined,
  data?: CharacterInfoResponse
): PassState => {
  if (isLoading) return "loading";
  if (!characterId || characterId === "open") return "unopened";

  const character = data?.characters?.find((c) => c.characterId === characterId);
  if (!character) return "unopened";
  if (character.status === "MINTED") return "minted";
  if (character.characterId) return "opened";
  return "unopened";
};

export const PushPassItem = () => {
  const navigate = useNavigate();
  const { id: routeId } = useParams<{ id: string }>();
  const [generatedCharacterId, setGeneratedCharacterId] = useState<string>();
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState("");
  const characterId = generatedCharacterId || (routeId === "open" ? undefined : routeId);
  const { universalAccount } = usePushWalletContext('wallet1');
  const { pushChainClient } = usePushChainClient('wallet1');

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: characterInfo, isLoading, refetch } = useGetCharacterInfo({
    walletAddress: caip10WalletAddress,
  });

  const { data: reshuffleFeeData, refetch: refetchFee } = useGetNextReshuffleFee({
    characterId: characterId as string,
  });

  const {
    mutate: generate,
    isPending: isGenerating,
    isError: isGenerateError,
  } = useGenerateCharacter();

  const {
    mutate: reshuffle,
    isPending: isReshuffling,
    isError: isReshuffleError,
  } = useReshuffleCharacter();

  const {
    mutate: mint,
    isPending: isMinting,
    isError: isMintError,
  } = useMintCharacter();

  const passState = getPassState(isLoading, characterId, characterInfo);
  const character = characterInfo?.characters?.find((c) => c.characterId === characterId);
  const isMinted = character?.status === "MINTED";
  const isActionLoading = isGenerating || isReshuffling || isMinting || isPaying;

  const canReshuffle = reshuffleFeeData?.canReshuffle ?? false;
  const reshuffleCount = reshuffleFeeData?.reshuffleCount ?? 0;
  const maxReshuffles = reshuffleFeeData?.maxReshufflesPerIssue ?? 5;
  const nextFeeType = reshuffleFeeData?.nextReshuffleFeeType;
  const nextFee = reshuffleFeeData?.nextReshuffleFee;

  const PC_TOKEN_RECIPIENT = "0xD91D61bd2841839eA8c37581F033C9a91Be6a5A6";

  const handleOpenPass = () => {
    if (!caip10WalletAddress) return;
    generate(
      { userWallet: caip10WalletAddress },
      {
        onSuccess: (data) => {
          if (data?.characterId) {
            setGeneratedCharacterId(data.characterId);
          }
          refetch();
        },
      }
    );
  };

  const handleReshuffle = async () => {
    if (!caip10WalletAddress || !characterId || !canReshuffle) return;
    setPayError("");

    if (nextFeeType === 'tweet') {
      const tweetText = encodeURIComponent("I just rerolled my Rare Pass on @pushchain! 🎲✨");
      window.open(`https://x.com/intent/tweet?text=${tweetText}`, '_blank');

      reshuffle(
        {
          userWallet: caip10WalletAddress,
          characterId,
          feeType: 'tweet',
        },
        {
          onSuccess: (data) => {
            if (data?.newCharacterId) {
              setGeneratedCharacterId(data.newCharacterId);
            }
            refetch();
            refetchFee();
          },
        }
      );
    }

    if (nextFeeType === 'PC') {
      if (!pushChainClient || nextFee == null) return;

      try {
        setIsPaying(true);
        const feeInWei = BigInt(nextFee) * BigInt(10 ** 18);

        const txResponse = await pushChainClient.universal.sendTransaction({
          to: PC_TOKEN_RECIPIENT as `0x${string}`,
          value: feeInWei,
        });

        const txHash = txResponse.hash;

        reshuffle(
          {
            userWallet: caip10WalletAddress,
            characterId,
            feeType: 'PC',
            feeProof: txHash,
          },
          {
            onSuccess: (data) => {
              if (data?.newCharacterId) {
                setGeneratedCharacterId(data.newCharacterId);
              }
              refetch();
              refetchFee();
            },
            onSettled: () => {
              setIsPaying(false);
            },
          }
        );
      } catch (error) {
        console.error("PC token transfer failed:", error);
        setPayError("PC token transfer failed. Please try again.");
        setIsPaying(false);
      }
    }
  };

  const handleMint = () => {
    if (!caip10WalletAddress) return;
    mint(
      {
        userWallet: caip10WalletAddress,
        characterId: characterId
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  return (
    <Box
      padding="spacing-md"
      borderRadius="radius-md"
      position="relative"
      width="100%"
      overflow="hidden"
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

      {/* Loading character info */}
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

      {/* No character yet — show Open Pass button to generate */}
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
              disabled={isGenerating}
            >
              {isGenerating ? <Spinner size="small" /> : "Open Pass"}
            </Button>

            {isGenerateError && (
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

      {/* Character revealed — show mint & reshuffle options */}
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
                overflow: 'hidden';
              `}
            >
              <CharacterImage characterId={characterId} width={248} height={318} />
            </Box>

            {!isMinted && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="spacing-sm"
                css={css`
                  margin-top: 24px;
                `}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  gap="spacing-md"
                >
                  <Button
                    variant="outline"
                    onClick={handleMint}
                    disabled={isActionLoading}
                    css={css`
                      min-width: 140px;
                    `}
                  >
                    {isMinting ? <Spinner size="small" /> : "Confirm & Claim Pass"}
                  </Button>

                  {canReshuffle && (
                    <Button
                      variant="primary"
                      onClick={handleReshuffle}
                      disabled={isActionLoading}
                      css={css`
                        min-width: 140px;
                      `}
                    >
                      {isReshuffling || isPaying ? (
                        <Spinner size="small" />
                      ) : nextFeeType === 'tweet' ? (
                        <><Twitter width={20} height={20} /> Tweet to Reroll</>
                      ) : nextFeeType === 'PC' ? (
                        <>Reroll ({nextFee} PC)</>
                      ) : (
                        "Reroll"
                      )}
                    </Button>
                  )}
                </Box>

                <Text
                  variant="bs-regular"
                  css={css`
                    color: rgba(255, 255, 255, 0.5);
                  `}
                >
                  {reshuffleCount}/{maxReshuffles} reshuffles used
                </Text>
              </Box>
            )}

            {(isReshuffleError || isMintError || payError) && (
              <Text
                variant="bs-regular"
                css={css`
                  color: #ff6b6b;
                `}
              >
                {payError || (isReshuffleError ? "Failed to reshuffle." : "Failed to mint.") + " Please try again."}
              </Text>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};
