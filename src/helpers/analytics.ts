declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type GAEventParams = {
  event_category: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
};

export const trackEvent = (eventName: string, params: GAEventParams) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};
