import { type StorybookConfig } from "@storybook/react-vite";

import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../lib/main.stories.@(js|jsx|ts|tsx)",
    "../lib/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  viteFinal: async (config) => {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      "@Styles": resolve(__dirname, "../styles"),
      "@Utils": resolve(__dirname, "../utils"),
    };
    return config;
  },
};

export default config;
