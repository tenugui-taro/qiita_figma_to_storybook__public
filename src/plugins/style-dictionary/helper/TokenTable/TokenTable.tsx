import styles from "./TokenTable.module.css";
import clsx from "clsx";
import { DesignToken } from "../../build/js/tokens";
import { CopyableText } from "../CopyableText/CopyableText";

interface TokenTableInterface {
  tokens: DesignToken[];
  preview: (token: DesignToken) => JSX.Element;
}

export const TokenTable = ({
  tokens,
  preview,
}: TokenTableInterface): JSX.Element => {
  return (
    <div className={clsx(styles["tokenTable"])}>
      <table className={clsx(styles["tokenTable__inner"])}>
        <thead className={clsx(styles["tokenTable__headerRow"])}>
          <tr>
            <th>Preview</th>
            <th>CSS Variable</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr
              key={token.name}
              className={clsx(styles["tokenTable__bodyRow"])}
            >
              <td className={clsx(styles["tokenTable__preview"])}>
                {preview(token)}
              </td>
              <td>
                <CopyableText text={`var(--${token.name})`} />
              </td>
              <td className={clsx(styles["tokenTable__value"])}>
                <code>{token.value}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
