import type { Meta, StoryObj } from "@storybook/react";
import BrandIcon from "./BrandIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "BrandIcon",
  component: BrandIcon,
  parameters: {
    backgrounds: {
      default: "black",
      values: [
        { name: "black", value: "#222" },
        { name: "gray", value: "#999" },
        { name: "white", value: "#fff" },
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BrandIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: "nokkel",
  },
};

export const Secondary: Story = {
  args: {
    theme: "aviva",
  },
};

export const Tertiary: Story = {
  args: {
    theme: "quilter",
  },
};
