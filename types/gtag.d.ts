export {};

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: {
        send_to: string;
        value: number;
        currency: string;
      }
    ) => void;
  }
}