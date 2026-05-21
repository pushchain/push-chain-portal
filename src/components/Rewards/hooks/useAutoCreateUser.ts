import { useCallback, useState } from 'react';
import { usePushChainClient, usePushWalletContext } from '@pushchain/ui-kit';

import { useCreateSeasonThreeUser } from '../../../queries';
import { parseCAIP, walletToFullCAIP10 } from '../../../helpers/web3helper';
import { WalletChainType } from '../utils/wallet';
import { useSignMessageWithEthereum } from './useSignMessage';
import { useSignMessageWithSolana } from './useSignMessageWithSolana';
import { useSignPushMessage } from './useSignPushMessage';

type Callbacks = {
  onSuccess?: () => void;
  onError?: (msg: string) => void;
};

export const useAutoCreateUser = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { universalAccount, connectionType } = usePushWalletContext('wallet1');
  const { pushChainClient } = usePushChainClient('wallet1');
  const { mutate: createUser } = useCreateSeasonThreeUser();

  const { chainId } = parseCAIP(universalAccount?.chain);
  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const ueaAccount = pushChainClient?.universal?.account;
  const { signMessage } = useSignMessageWithEthereum();
  const { signMessage: signMessageWithSolana } = useSignMessageWithSolana();
  const { signMessage: signMessageWithPush } = useSignPushMessage();

  const isPushSocialWalletUser = connectionType === 'social';
  const isSolana = chainId === WalletChainType.SOLANA;

  const create = useCallback(async (inviteCode?: string, callbacks?: Callbacks) => {
    setIsCreating(true);
    setError(null);

    let signature: string;
    let dataPayload: string;

    try {
      if (isPushSocialWalletUser) {
        const { signature: sig, messageToSend, error: err } = await signMessageWithPush();
        if (err || !sig) {
          const msg = err || 'Failed to sign message';
          setError(msg);
          setIsCreating(false);
          callbacks?.onError?.(msg);
          return;
        }
        signature = sig;
        dataPayload = messageToSend;
      } else {
        const result = isSolana ? await signMessageWithSolana() : await signMessage();
        const { signature: sig, messageToSend, messageString, error: err } = result as any;
        if (err || !sig) {
          const msg = err || 'Failed to sign message';
          setError(msg);
          setIsCreating(false);
          callbacks?.onError?.(msg);
          return;
        }
        signature = sig;
        dataPayload = isSolana ? messageString : messageToSend;
      }
    } catch {
      const msg = 'Signing failed. Please try again.';
      setError(msg);
      setIsCreating(false);
      callbacks?.onError?.(msg);
      return;
    }

    console.log(caip10WalletAddress, ueaAccount, signature)

    createUser(
      {
        userWallet: caip10WalletAddress,
        userUEAWallet: `eip155:42101:${ueaAccount}`,
        phase: 'HYPE',
        data: dataPayload,
        inviteCodeUsed: inviteCode,
        verificationProof: signature,
      },
      {
        onSuccess: () => {
          setIsCreating(false);
          callbacks?.onSuccess?.();
        },
        onError: (err: any) => {
          const msg = err?.response?.data?.error || 'Failed to create user';
          setError(msg);
          setIsCreating(false);
          callbacks?.onError?.(msg);
        },
      },
    );
  }, [isPushSocialWalletUser, isSolana, signMessage, signMessageWithSolana, signMessageWithPush, caip10WalletAddress, ueaAccount, createUser]); // eslint-disable-line react-hooks/exhaustive-deps

  return { create, isCreating, error };
};
