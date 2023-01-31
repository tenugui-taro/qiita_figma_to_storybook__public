import tokens, {
  DesignToken,
} from "@/plugins/style-dictionary/build/js/tokens";
import { getDesignTokens } from "@/plugins/style-dictionary/helper/getDesignTokens";
import { TokenTable } from "@/plugins/style-dictionary/helper/TokenTable/TokenTable";

interface FontInterface {
  category: "size" | "weight";
}

const renderFontPreview = {
  size: (token: DesignToken) => <div style={{ fontSize: token.value }}>Aa</div>,
  weight: (token: DesignToken) => (
    <div style={{ fontWeight: token.value }}>Aa</div>
  ),
};

export const Font = ({ category }: FontInterface): JSX.Element => {
  return (
    <>
      <TokenTable
        tokens={getDesignTokens(tokens.font[category])}
        preview={(token: DesignToken): JSX.Element => {
          return renderFontPreview[category](token);
        }}
      />
    </>
  );
};
