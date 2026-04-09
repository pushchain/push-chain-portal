import { useEffect, useRef, useContext, createContext, useState } from "react";
import { Box } from "../blocks";
import { css } from "styled-components";

interface LinkedWalletContextType {
  handleLinkedWalletConnection: () => void;
  handleLogOut: () => void;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  sendMessage: (message: unknown) => void;
  data: any | null;
  setData: (data: any | null) => void;
}

const LinkedWalletContext = createContext<LinkedWalletContextType | null>(null);

export const useLinkedWallet = () => {
  const context = useContext(LinkedWalletContext);

  if (!context) {
    throw new Error('useLinkedWallet must be used within LinkedWalletProvider');
  }

  return context;
};

export const LinkedWalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const sendMessage = (message: unknown) => {
    if (iframeRef?.current?.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          message,
          "https://portal-link.push.org/",
        );
      } catch (error) {
        console.error('Error sending message to push wallet tab:', error);
      }
    }
  };

  const handleLinkedWalletConnection = () => {
    setIsOpen(true);
    sendMessage({
      type: 'CONNECT_REQUEST',
    });
  };


  const handleLogOut = () => {
    sendMessage({
      type: 'DISCONNECT_REQUEST',
    });
  };


  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (iframeRef.current?.contentWindow !== event.source) return;

      switch (event.data.type) {
        case 'SIGN_SUCCESS':
          setData(event.data.data);
          break;
        case 'CLOSE_IFRAME':
          console.log('check');
          setIsOpen(false);
          break;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const value: LinkedWalletContextType = {
    handleLinkedWalletConnection,
    handleLogOut,
    iframeRef,
    sendMessage,
    data,
    setData
  };

  return (
    <LinkedWalletContext.Provider value={value}>
      <Box
        position="absolute"
        width="100%"
        height="100%"
        css={css`
          z-index: 1000;
          visibility: ${isOpen ? 'visible' : 'hidden'};
        `}
      >
        <iframe
          src={`https://portal-link.push.org?app=${window.location.origin}`}
          allow="clipboard-write; clipboard-read; publickey-credentials-create; publickey-credentials-get; display-capture; *"
          ref={iframeRef}
          style={{
            border: 'none',
            width: '100%',
            height: '100vh',
            borderRadius: '0px',
          }}
        />
      </Box>
      {children}
    </LinkedWalletContext.Provider>
  );
};
