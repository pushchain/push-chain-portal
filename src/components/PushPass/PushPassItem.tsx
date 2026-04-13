import { useState } from "react";
import { css } from "styled-components";
import { usePushWalletContext, usePushChainClient } from "@pushchain/ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";


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
import { Image } from "../../css/SharedStyling";
import { CharacterImage } from "./CharacterImage";
import { walletToFullCAIP10 } from "../../helpers/web3helper";
import { trackEvent } from "../../helpers/analytics";

import RarePassBg from '../../../static/assets/website/pushpass/RarePassBG.webp';
import RarePassAnimation from "../../../static/assets/website/pushpass/rare-glow.json";
import { Alert, Back, Box, Button, Link,Skeleton, Spinner, Text, Twitter } from "../../blocks";
import { parseCharacterId, getImagePath } from "./CharacterImage";




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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [payError, setPayError] = useState("");
  const [generateError, setGenerateError] = useState("");
  const [reshuffleError, setReshuffleError] = useState("");
  const [mintError, setMintError] = useState("");
  const characterId = generatedCharacterId || (routeId === "open" ? undefined : routeId);
  const { universalAccount } = usePushWalletContext('wallet1');
  const { pushChainClient } = usePushChainClient('wallet1');

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const { data: characterInfo, isLoading, isRefetching, refetch } = useGetCharacterInfo({
    walletAddress: caip10WalletAddress,
  });

  const { data: reshuffleFeeData, isLoading: isFeeLoading, refetch: refetchFee } = useGetNextReshuffleFee({
    characterId: characterId as string,
  });

  const {
    mutateAsync: generate,
    isPending: isGenerating,
  } = useGenerateCharacter();

  const {
    mutateAsync: reshuffle,
    isPending: isReshuffling,
  } = useReshuffleCharacter();

  const {
    mutateAsync: mint,
    isPending: isMinting,
  } = useMintCharacter();

  const passState = getPassState(!caip10WalletAddress || isLoading || isTransitioning, characterId, characterInfo);
  const character = characterInfo?.characters?.find((c) => c.characterId === characterId);
  const isMinted = character?.status === "MINTED";
  const isActionLoading = isGenerating || isReshuffling || isMinting || isPaying;

  const canReshuffle = reshuffleFeeData?.canReshuffle ?? false;
  const reshuffleCount = reshuffleFeeData?.reshuffleCount ?? 0;
  const maxReshuffles = reshuffleFeeData?.maxReshufflesPerIssue ?? 5;
  const nextFeeType = reshuffleFeeData?.nextReshuffleFeeType;
  const nextFee = reshuffleFeeData?.nextReshuffleFee;

  const PC_TOKEN_RECIPIENT = "0x54cd69927A869DDCb6786bf5C2C82a93790D321E";

  const loadImage = (src: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });

  const handleSharePass = async () => {
    const traits = parseCharacterId(characterId as string);
    if (!traits) return;

    const canvas = document.createElement('canvas');
    canvas.width = 496;
    canvas.height = 636;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw background first
    const bgImg = await loadImage(RarePassBg);
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

    // Draw character layers on top
    const layers = [
      getImagePath('Body', traits.body),
      getImagePath('Head', traits.head),
      getImagePath('Accessory', traits.accessory),
      getImagePath('Headgear', traits.headgear),
    ];

    for (const src of layers) {
      const img = await loadImage(src);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/png')
    );
    if (!blob) return;

    const tweetText = `I just minted my Push Pass on @PushChain! Check it out 👇\n\n*Attach Image*`;

    // Download the composited image
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'push-pass.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);

    // Open Twitter with pre-filled tweet
    const encoded = encodeURIComponent(tweetText);
    window.open(`https://twitter.com/intent/tweet?text=${encoded}`, '_blank');
  };

  const handleOpenPass = async () => {
    if (!caip10WalletAddress) return;
    setGenerateError("");
    trackEvent('rare_pass_open_clicked', { event_category: 'rarepass' });
    try {
      const data = await generate({ userWallet: caip10WalletAddress });
      const response = data?.characterId || data?.data?.characterId;
      trackEvent('rare_pass_opened', { event_category: 'rarepass', event_label: response });
      setIsTransitioning(true);
      if (response) {
        setGeneratedCharacterId(response);
      }
      await refetch().finally(() => setIsTransitioning(false));
    } catch (err: any) {
      const message = err?.response?.data?.error?.message || "Failed to open pass. Please try again.";
      setGenerateError(message);
    }
  };

  const handleReshuffleSuccess = async (data: any) => {
    const response = data?.newCharacterId || data?.data?.newCharacterId;
    setIsTransitioning(true);
    if (response) {
      setGeneratedCharacterId(response);
    }
    await Promise.all([refetch(), refetchFee()]).finally(() => setIsTransitioning(false));
  };

  const handleReshuffle = async () => {
    if (!caip10WalletAddress || !characterId || !canReshuffle) return;
    setPayError("");
    setReshuffleError("");

    if (nextFeeType === 'tweet') {
      const tweetText = encodeURIComponent("I just rerolled my Rare Pass on @PushChain! 🎲✨");
      window.open(`https://x.com/intent/tweet?text=${tweetText}`, '_blank');
      trackEvent('rare_pass_reshuffle_tweet', { event_category: 'rarepass', event_label: characterId });

      try {
        const data = await reshuffle({
          userWallet: caip10WalletAddress,
          characterId,
          feeType: 'tweet',
        });
        await handleReshuffleSuccess(data);
      } catch (err: any) {
        const message = err?.response?.data?.error?.message || "Failed to reshuffle. Please try again.";
        setReshuffleError(message);
      }
    }

    if (nextFeeType === 'PC') {
      if (!pushChainClient || nextFee == null) return;
      trackEvent('rare_pass_reshuffle_pc', { event_category: 'rarepass', event_label: characterId, value: nextFee });

      try {
        setIsPaying(true);
        const feeInWei = BigInt(nextFee) * BigInt(10 ** 18);

        const txResponse = await pushChainClient.universal.sendTransaction({
          to: PC_TOKEN_RECIPIENT as `0x${string}`,
          value: feeInWei,
        });

        // console.log(txResponse, 'txResponse');

        const data = await reshuffle({
          userWallet: caip10WalletAddress,
          characterId,
          feeType: 'PC',
          feeProof: txResponse.hash,
        });
        await handleReshuffleSuccess(data);
      } catch (err: any) {
        const message = err?.response?.data?.error?.message || "Failed to reshuffle. Please try again.";
        if (message.includes("transfer") || !err?.response) {
          setPayError(message);
        } else {
          setReshuffleError(message);
        }
      } finally {
        setIsPaying(false);
      }
    }
  };

  const handleMint = async () => {
    if (!caip10WalletAddress) return;
    setMintError("");
    trackEvent('rare_pass_mint_clicked', { event_category: 'rarepass', event_label: characterId });
    try {
      await mint({
        userWallet: caip10WalletAddress,
        characterId: characterId,
      });
      trackEvent('rare_pass_minted', { event_category: 'rarepass', event_label: characterId });
      setIsTransitioning(true);
      await refetch().finally(() => setIsTransitioning(false));
    } catch (err: any) {
      const message = err?.response?.data?.error?.message || "Failed to mint. Please try again.";
      setMintError(message);
    }
  };

  return (
    <>
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

      {passState === "loading" && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          gap="spacing-md"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            gap="spacing-xxs"
          >
            <Skeleton isLoading width="60%" height="32px" borderRadius="radius-xs" />
            <Skeleton isLoading width="40%" height="18px" borderRadius="radius-xs" />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            gap="spacing-md"
            css={css`
              margin: 40px 0px;
            `}
          >
            {characterId && characterId !== "open" ? (
              <>
                <Skeleton isLoading width="248px" height="318px" borderRadius="radius-md" />
                <Box display="flex" flexDirection="row" gap="spacing-md">
                  <Skeleton isLoading width="180px" height="40px" borderRadius="radius-xs" />
                  <Skeleton isLoading width="140px" height="40px" borderRadius="radius-xs" />
                </Box>
                <Skeleton isLoading width="150px" height="16px" borderRadius="radius-xs" />
              </>
            ) : (
              <>
                <Skeleton isLoading width="227px" height="290px" borderRadius="radius-md" />
                <Skeleton isLoading width="140px" height="40px" borderRadius="radius-xs" />
              </>
            )}
          </Box>
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

          {generateError &&
            <Box width="auto" css={css`
            margin: 12px auto 0 auto;
            `}>
            <Alert variant="error" description={generateError} />
          </Box>}

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            gap="spacing-xl"
            css={css`
              margin: 40px 0px;
            `}
          >
            <Image src={OpenPassImage} alt="Open Pass" width={227} />

            <Button
              variant="primary"
              onClick={handleOpenPass}
              disabled={isGenerating}
              loading={isGenerating}
            >
              Open Pass
            </Button>
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
              textAlign="center"
              css={css`
                background: linear-gradient(180deg, #fff 49.73%, #c968e7 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              {isMinted ? "Congratulations on your unique pass" : "Your Rare Pass has been revealed!"}
            </Text>
            <Text
              variant="bm-regular"
              textAlign="center"
              css={css`
                color: rgba(255, 255, 255, 0.75);
              `}
            >
              {isMinted
                ? "HODL onto your passes until the burn event and be one of the lucky few to get Eternal Rewards*"
                : "You can confirm and claim or reroll for different traits"}
            </Text>
          </Box>

          {(reshuffleError || mintError || payError) && (
            <Box width="auto" css={css`margin: 12px auto 0 auto;`}>
              <Alert variant="error" description={payError || reshuffleError || mintError} />
            </Box>
          )}

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            css={css`
              @media ${device.mobileL}{
                  margin: 40px 0px 0px 0px;
                  gap: 24px;
              }
            `}
          >

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
              width="100%"
              margin="spacing-sm spacing-none spacing-none spacing-none"
            >
              <Lottie
                animationData={RarePassAnimation}
                loop
                style={{ maxWidth: '450px', maxHeight: '450px' }}
              />


              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                position="absolute"
                css={css`
                  background: url(${RarePassBg}) center/cover;
                  width: 248px;
                  max-width: 100%;
                  height: 328px;
                  overflow: visible;
                `}
              >
                <CharacterImage characterId={characterId} width={248} height={328} reflectionBg={`url(${RarePassBg}) center/cover`} />
              </Box>
              </Box>

              {isMinted && (
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    variant="primary"
                    size="medium"
                    leadingIcon={<Twitter width={20} height={20}  />}
                    onClick={handleSharePass}
                    css={css`
                      min-width: 140px;
                      z-index: 99;
                    `}
                  >
                    Share
                  </Button>
                </Box>
              )}


            {!isMinted && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="spacing-sm"
              >
                <Skeleton isLoading={isFeeLoading} width="340px" height="40px" borderRadius="radius-xs">
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing-md"
                  >
                    <Button
                      variant="outline"
                      onClick={handleMint}
                      disabled={isActionLoading}
                      loading={isMinting}
                    >
                     Confirm & Claim Pass
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
                </Skeleton>

                <Skeleton isLoading={isFeeLoading} width="150px" height="16px" borderRadius="radius-xs">
                  <Text
                    variant="bs-regular"
                    css={css`
                      color: white;
                    `}
                  >
                    {reshuffleCount}/{maxReshuffles} reshuffles used
                  </Text>
                </Skeleton>
              </Box>
            )}
          </Box>
        </>
      )}
    </Box>


    {!isMinted && <Box
      width="100%"
      padding="spacing-md spacing-none"
    >
      <Text
        variant='h5-regular'
        textAlign='center'>Not happy with the roll? Tweet something about Push Chain to Reroll the pass.</Text>
    </Box>}
    </>
  );
};
