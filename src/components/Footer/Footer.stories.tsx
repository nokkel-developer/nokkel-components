import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Footer",
  component: Footer,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: "nokkel",
    pageName: "Help and Support",
  },
};

export const Secondary: Story = {
  args: {
    theme: "aviva",
    pageName: "Help and Support",
  },
};

export const Tertiary: Story = {
  args: {
    theme: "quilter",
    pageName: "Help and Support",
  },
};
