import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import VideoCard from "./VideoCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "VideoCard",
  component: VideoCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div id="theme-provider" className="w-[800px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof VideoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title here",
    subtitle: "Sub goes here",
    videoSrc: "YA5Kxdq26YU",
  },
};
