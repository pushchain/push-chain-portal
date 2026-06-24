import { useState, useEffect, useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import { ethers } from "ethers";

import { Box, PushIcon, Text } from "../../blocks";
import { PushUniversalAccountButton, usePushWalletContext } from "@pushchain/ui-kit";
import appConfig from "../../config";
import { PUSH_TOKEN_ADDRESS, LOCKER_ABI, PUSH_TOKEN_ABI, MIGRATION_CHAIN_ID } from "../../config/migration";

const AmountInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 700;
  font-family: "DM Sans", sans-serif;
  color: #fff;
  width: auto;
  min-width: 1ch;
  field-sizing: content;

  &::placeholder {
    color: var(--text-tertiary);
  }
`;

const WithdrawAddressInput = styled.input`
  background: transparent;
  border: none;
  outline: none;

  font-family: "DM Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;

  color: #fff;
  width: 100%;

  field-sizing: content;

  &::placeholder {
    color: var(--text-tertiary);
  }
`;

type DepositFormProps = {
  isWalletConnected: boolean;
  userAddress?: string;
  lockerAddress: string;
};

export const DepositForm = ({ isWalletConnected, userAddress, lockerAddress }: DepositFormProps) => {
  const { handleSignAndSendTransaction } = usePushWalletContext('wallet1');

  const [amount, setAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");

  const [balance, setBalance] = useState("0");
  const [totalDeposited, setTotalDeposited] = useState("0");
  const [isPaused, setIsPaused] = useState(false);

  const [isApproving, setIsApproving] = useState(false);
  const [isLocking, setIsLocking] = useState(false);
  const [txError, setTxError] = useState("");
  const [txSuccess, setTxSuccess] = useState(false);

  const readProvider = useMemo(
    () => new ethers.providers.JsonRpcProvider(appConfig.coreRPC),
    []
  );

  const fetchBalance = useCallback(async () => {
    if (!userAddress) return;
    try {
      const pushToken = new ethers.Contract(PUSH_TOKEN_ADDRESS, PUSH_TOKEN_ABI, readProvider);
      const bal = await pushToken.balanceOf(userAddress);
      setBalance(parseFloat(ethers.utils.formatUnits(bal, 18)).toLocaleString());
    } catch {}
  }, [userAddress, readProvider]);

  const fetchContractState = useCallback(async () => {
    if (!lockerAddress) return;
    try {
      const pushToken = new ethers.Contract(PUSH_TOKEN_ADDRESS, PUSH_TOKEN_ABI, readProvider);
      const locker = new ethers.Contract(lockerAddress, LOCKER_ABI, readProvider);
      const [totalWei, paused] = await Promise.all([
        pushToken.balanceOf(lockerAddress),
        locker.paused(),
      ]);
      setTotalDeposited(parseFloat(ethers.utils.formatUnits(totalWei, 18)).toLocaleString());
      setIsPaused(paused);
    } catch {}
  }, [lockerAddress, readProvider]);

  useEffect(() => { fetchBalance(); }, [fetchBalance]);
  useEffect(() => { fetchContractState(); }, [fetchContractState]);

  // Builds, signs, and sends a single Ethereum transaction via the Push wallet
  const sendTx = useCallback(async (to: string, data: string, from: string) => {
    const [nonce, feeData, gasEstimate] = await Promise.all([
      readProvider.getTransactionCount(from),
      readProvider.getFeeData(),
      readProvider.estimateGas({ to, from, data }),
    ]);

    const unsignedTx: ethers.utils.UnsignedTransaction = {
      to,
      data,
      nonce,
      gasLimit: gasEstimate.mul(120).div(100),
      maxFeePerGas: feeData.maxFeePerGas ?? undefined,
      maxPriorityFeePerGas: feeData.maxPriorityFeePerGas ?? undefined,
      chainId: MIGRATION_CHAIN_ID,
      type: 2,
    };

    const serialized = ethers.utils.serializeTransaction(unsignedTx);
    const txBytes = ethers.utils.arrayify(serialized);
    const resultBytes = await handleSignAndSendTransaction(txBytes);
    const txHash = ethers.utils.hexlify(resultBytes);
    await readProvider.waitForTransaction(txHash);
  }, [readProvider, handleSignAndSendTransaction]);

  const handleDeposit = async () => {
    if (!lockerAddress || !amount || !withdrawAddress || !userAddress) return;
    setTxError("");
    setTxSuccess(false);

    try {
      const pushTokenIface = new ethers.utils.Interface(PUSH_TOKEN_ABI);
      const lockerIface = new ethers.utils.Interface(LOCKER_ABI);
      const amountInWei = ethers.utils.parseUnits(amount, 18);

      const pushToken = new ethers.Contract(PUSH_TOKEN_ADDRESS, PUSH_TOKEN_ABI, readProvider);
      const allowance = await pushToken.allowance(userAddress, lockerAddress);

      if (allowance.lt(amountInWei)) {
        setIsApproving(true);
        const approveData = pushTokenIface.encodeFunctionData("approve", [lockerAddress, amountInWei]);
        await sendTx(PUSH_TOKEN_ADDRESS, approveData, userAddress);
        setIsApproving(false);
      }

      setIsLocking(true);
      const lockData = lockerIface.encodeFunctionData("lock", [amountInWei, withdrawAddress]);
      await sendTx(lockerAddress, lockData, userAddress);
      setIsLocking(false);

      setTxSuccess(true);
      setAmount("");
      fetchBalance();
      fetchContractState();
    } catch (err: any) {
      setIsApproving(false);
      setIsLocking(false);
      const msg = err?.reason || err?.message || "";
      if (msg.includes("user rejected") || msg.includes("rejected"))
        setTxError("Transaction cancelled.");
      else if (msg.includes("paused") || msg.includes("EnforcedPause"))
        setTxError("Migration is temporarily paused. Check back soon.");
      else if (msg.includes("insufficient"))
        setTxError("Insufficient PUSH balance.");
      else
        setTxError("Something went wrong. Please try again.");
    }
  };

  const isDepositing = isApproving || isLocking;
  const depositLabel = isApproving ? "Approving..." : isLocking ? "Locking..." : "Deposit $PUSH";
  const canDeposit = isWalletConnected && !!amount && !!withdrawAddress && !isDepositing && !isPaused && !!lockerAddress;

  return (
  <Box
    display="flex"
    flexDirection="column"
    gap="spacing-md"
    alignItems="flex-start"
    css={css`
      width: 400px;
    `}
  >
    <Box
      width="100%"
      padding="spacing-xxs"
      css={css`
        background: #313338;
        border: 1px solid #484D58;
        border-radius: 24px;
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        padding="spacing-xs"
        width="100%"
        css={css`
          background: #202124;
          border-radius: 16px;
          box-sizing: border-box;
        `}
      >
        <Box display="flex" flexDirection="column" gap="spacing-xxs">
          <Text variant="c-semibold" color="text-tertiary">
              Enter PUSH tokens to deposit
          </Text>
          <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs">
            <PushIcon size={24} />
            <AmountInput
              // type="number"
              // min="0"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Text variant="h4-bold" color="text-primary">
              PUSH
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="flex-end" width="100%">
          <Text variant="bes-semibold" color="text-tertiary">
            Balance: {balance}
          </Text>
        </Box>
      </Box>
    </Box>

    {!isWalletConnected && (
      <Box display="flex" width="100%">
        <PushUniversalAccountButton uid="wallet1" />
      </Box>
    )}

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-xxxs"
        width="100%">
        <Text variant="h6-semibold">Address for receiving $PC Tokens*</Text>

        {isWalletConnected && (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="spacing-xxs"
              width="100%"
              padding="spacing-xs"
              cursor="text"
              css={css`
                background: #313338;
                border-radius: 12px;
                box-sizing: border-box;
              `}
            >
              <PushIcon size={24} />
              <WithdrawAddressInput
                placeholder=""
                value={withdrawAddress}
                onChange={(e) => setWithdrawAddress(e.target.value)}
              />
            </Box>
        )}

        <Text variant="c-regular" color="text-tertiary">
          This is the address you will receive $PC tokens on Mainnet. Please ensure this address is a valid Push Chain address or funds will be lost.
        </Text>
      </Box>

    {isPaused && (
      <Box width="100%" padding="spacing-xs" css={css`background: rgba(255,80,80,0.1); border: 1px solid rgba(255,80,80,0.3); border-radius: 12px; box-sizing: border-box;`}>
        <Text variant="bs-regular" css={css`color: #ff8080;`}>Migration is temporarily paused. Check back soon.</Text>
      </Box>
    )}

    {txError && (
      <Box width="100%" padding="spacing-xs" css={css`background: rgba(255,80,80,0.1); border: 1px solid rgba(255,80,80,0.3); border-radius: 12px; box-sizing: border-box;`}>
        <Text variant="bs-regular" css={css`color: #ff8080;`}>{txError}</Text>
      </Box>
    )}

    {txSuccess && (
      <Box width="100%" padding="spacing-xs" css={css`background: rgba(66,221,177,0.1); border: 1px solid rgba(66,221,177,0.3); border-radius: 12px; box-sizing: border-box;`}>
        <Text variant="bs-regular" css={css`color: #42ddb1;`}>Tokens locked! Your migration is in progress.</Text>
      </Box>
    )}

    {isWalletConnected && (
      <Box
        as="button"
        width="100%"
        padding="spacing-sm"
        onClick={handleDeposit}
        css={css`
          background: ${canDeposit ? "#C742DD" : "rgba(255,255,255,0.08)"};
          border: none;
          border-radius: 16px;
          cursor: ${canDeposit ? "pointer" : "not-allowed"};
          color: ${canDeposit ? "#fff" : "rgba(255,255,255,0.3)"};
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          transition: background 0.2s;
          box-sizing: border-box;
        `}
      >
        {depositLabel}
      </Box>
    )}

    <Box display="flex" flexDirection="column" gap="spacing-lg" width="100%">
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xxs"
        padding="spacing-xxs"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text variant="h6-regular" color="text-tertiary">
            Conversion rate
          </Text>
          <Text variant="bs-semibold" color="text-secondary">
            1 PUSH = 45 PC
          </Text>
        </Box>

        {amount && !isNaN(parseFloat(amount)) && parseFloat(amount) > 0 && (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text variant="h6-regular" color="text-tertiary">
              You will receive
            </Text>
            <Text variant="bs-semibold" color="text-primary">
              {(parseFloat(amount) * 45).toLocaleString()} PC
            </Text>
          </Box>
        )}
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="spacing-md"
        width="100%"
        css={css`
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          box-sizing: border-box;
        `}
      >
        <Text variant="bm-semibold" color="text-primary">
          Total Deposited
        </Text>
        <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs">
          <PushIcon size={24} />
          <Text variant="bs-semibold" color="text-primary">
            {totalDeposited} PUSH
          </Text>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};
