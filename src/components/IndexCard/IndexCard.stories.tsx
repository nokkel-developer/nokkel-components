import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import IndexCard from "./IndexCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "IndexCard",
  component: IndexCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IndexCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title here",
    subtitle: "Sub goes here",
  },
};
