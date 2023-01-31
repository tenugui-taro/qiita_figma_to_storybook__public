import styles from "./CopyableText.module.css";
import { useClipboardCopy } from "@/hooks/useClipboardCopy";
import clsx from "clsx";

interface CopyableTextInterface {
  text: string;
}

export const CopyableText = ({ text }: CopyableTextInterface): JSX.Element => {
  const { copied, copyToClipboard } = useClipboardCopy();
  return (
    <>
      {copied ? (
        <code className={clsx(styles["copyableText__copied"])}>Copied !</code>
      ) : (
        <code
          className={clsx(styles["copyableText__text"])}
          onClick={() => copyToClipboard(text)}
        >
          {text}
        </code>
      )}
    </>
  );
};
