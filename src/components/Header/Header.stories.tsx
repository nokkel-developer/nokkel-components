import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Header",
  component: Header,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

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
