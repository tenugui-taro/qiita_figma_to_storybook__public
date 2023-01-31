import { useState } from "react";

export const useClipboardCopy = (copiedTimeout = 800) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, copiedTimeout);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return {
    copied,
    copyToClipboard,
  };
};
