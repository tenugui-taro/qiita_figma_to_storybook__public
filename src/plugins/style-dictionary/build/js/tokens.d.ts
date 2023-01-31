/**
 * Do not edit directly
 * Generated on Mon, 30 Jan 2023 18:12:53 GMT
 */

export default tokens;
declare interface DesignToken {
  value: any;
  name: string;
  comment?: string;
  description?: string;
  themeable?: boolean;
  original: {
    value: string;
    label?: string;
  };
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  path: string[];
  [key: string]: any;
}

export { DesignToken };
export interface DesignTokens {
  [key: string]: DesignTokens | DesignToken;
}
declare const tokens: {
  "color": {
    "gray": {
      "1": DesignToken,
      "2": DesignToken,
      "3": DesignToken,
      "4": DesignToken,
      "5": DesignToken,
      "6": DesignToken
    },
    "red": {
      "1": DesignToken
    },
    "orange": {
      "1": DesignToken
    },
    "yellow": {
      "1": DesignToken
    },
    "green": {
      "1": DesignToken,
      "2": DesignToken,
      "3": DesignToken
    },
    "blue": {
      "1": DesignToken,
      "2": DesignToken,
      "3": DesignToken
    },
    "purple": {
      "1": DesignToken,
      "2": DesignToken
    }
  },
  "font": {
    "size": {
      "xxs": DesignToken,
      "xs": DesignToken,
      "s": DesignToken,
      "m": DesignToken,
      "l": DesignToken,
      "heading": {
        "0": DesignToken,
        "1": DesignToken,
        "2": DesignToken,
        "3": DesignToken
      },
      "default": DesignToken
    },
    "weight": {
      "normal": DesignToken,
      "semibold": DesignToken,
      "bold": DesignToken,
      "default": DesignToken
    }
  }
}