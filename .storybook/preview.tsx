import React from "react";
import type { Preview } from "@storybook/react";
import "../src/styles/global.css";
import type { ThemeConfig } from "storybook-addon-data-theme-switcher";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div id="theme-provider">
        <Story />
      </div>
    ),
  ],
};

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: "aviva", dataTheme: "aviva" },
        { name: "nokkel", dataTheme: "nokkel" },
        { name: "quilter", dataTheme: "quilter" },
      ],
    } satisfies ThemeConfig,
  },
};

export default preview;
