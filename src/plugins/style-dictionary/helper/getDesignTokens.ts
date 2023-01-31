import { DesignToken } from "../build/js/tokens";

/**
 * 自動生成されたデザイントークンのオブジェクトを受け取り、
 * デザイントークンの配列を返すヘルパー関数
 * @example
 * getDesignTokens(tokens.color.basic)
 * getDesignTokens(tokens.size.font)
 */
export const getDesignTokens = (tokenObj: any): DesignToken[] => {
  const designTokens: DesignToken[] = [];

  // 再帰を用いて、valueプロパティを走査
  const recursive = (obj: any) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key].value) {
          designTokens.push(obj[key]);
        } else if (key !== "0") {
          recursive(obj[key]);
        }
      }
    }
  };
  recursive(tokenObj);
  return designTokens;
};
