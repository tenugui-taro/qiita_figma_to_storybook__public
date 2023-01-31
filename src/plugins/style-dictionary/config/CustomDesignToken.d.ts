interface DesignToken {
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
