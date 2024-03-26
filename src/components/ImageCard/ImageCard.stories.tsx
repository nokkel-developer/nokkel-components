import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ImageCard from "./ImageCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "ImageCard",
  component: ImageCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "title" },
  },
  decorators: [
    (Story) => (
      <div id="theme-provider">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "first story",
  },
};

export const Secondary: Story = {
  args: {
    title: "second story",
  },
};

export const Large: Story = {
  args: {
    title: "thirdstory",
  },
};
