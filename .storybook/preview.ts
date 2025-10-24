import { type Preview } from "@storybook/react-vite";

import "../styles/main.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    docs: {
      toc: true,
      disable: false,
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
          {
            id: "valid-aria-role",
            enabled: true,
          },
          {
            id: "button-name",
            enabled: true,
          },
          {
            id: "image-alt",
            enabled: true,
          },
          {
            id: "heading-order",
            enabled: true,
          },
        ],
      },
      options: {
        checks: { "color-contrast": { options: { level: "AAA" } } },
        runOnly: {
          type: "tag",
          values: ["wcag2aaa", "wcag21aaa"],
        },
      },
      test: "error",
    },
  },
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme ?? "light";
      const isDark = theme === "dark";

      // Apply theme to document root
      if (isDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.style.colorScheme = "dark";
      } else {
        document.documentElement.removeAttribute("data-theme");
        document.documentElement.style.colorScheme = "light";
      }

      // Apply to body as well
      if (isDark) {
        document.body.setAttribute("data-theme", "dark");
        document.body.style.colorScheme = "dark";
      } else {
        document.body.removeAttribute("data-theme");
        document.body.style.colorScheme = "light";
      }

      return story();
    },
  ],
};

export default preview;
