import { Color } from "./Color";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
  component: Color,
} as ComponentMeta<typeof Color>;

export const ALL: ComponentStoryObj<typeof Color> = {
  args: {
    category: "all",
  },
  render: (args) => <Color {...args} />,
};

export const Gray: ComponentStoryObj<typeof Color> = {
  ...ALL,
  args: {
    ...ALL.args,
    category: "gray",
  },
};

export const Red: ComponentStoryObj<typeof Color> = {
  ...ALL,
  args: {
    ...ALL.args,
    category: "red",
  },
};

export const Orange: ComponentStoryObj<typeof Color> = {
  ...ALL,
  args: {
    ...ALL.args,
    category: "orange",
  },
};

export const Yellow: ComponentStoryObj<typeof Color> = {
  ...ALL,
  args: {
    ...ALL.args,
    category: "yellow",
  },
};

export const Green: ComponentStoryObj<typeof Color> = {
  ...ALL,
  args: {
    ...ALL.args,
    category: "green",
  },
};

export const Blue: ComponentStoryObj<typeof Color> = {
  ...ALL,
  args: {
    ...ALL.args,
    category: "blue",
  },
};

export const Purple: ComponentStoryObj<typeof Color> = {
  ...ALL,
  args: {
    ...ALL.args,
    category: "purple",
  },
};
