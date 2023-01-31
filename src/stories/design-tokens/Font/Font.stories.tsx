import { Font } from "./Font";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
  component: Font,
} as ComponentMeta<typeof Font>;

export const Size: ComponentStoryObj<typeof Font> = {
  args: {
    category: "size",
  },
  render: (args) => <Font {...args} />,
};

export const Weight: ComponentStoryObj<typeof Font> = {
  ...Size,
  args: {
    ...Size.args,
    category: "weight",
  },
};
