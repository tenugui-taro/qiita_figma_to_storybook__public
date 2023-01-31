import tokens, {
  DesignToken,
} from "@/plugins/style-dictionary/build/js/tokens";
import { getDesignTokens } from "@/plugins/style-dictionary/helper/getDesignTokens";
import { TokenTable } from "@/plugins/style-dictionary/helper/TokenTable/TokenTable";

interface ColorInterface {
  category:
    | "all"
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple";
}

export const Color = ({ category }: ColorInterface): JSX.Element => {
  return (
    <>
      <TokenTable
        tokens={getDesignTokens(
          category === "all" ? tokens.color : tokens.color[category]
        )}
        preview={(token: DesignToken): JSX.Element => {
          return (
            <div
              style={{
                width: "90%",
                height: "100%",
                backgroundColor: token.value,
              }}
            >
              &nbsp;
            </div>
          );
        }}
      />
    </>
  );
};
