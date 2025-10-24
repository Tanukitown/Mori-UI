import { create } from "storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: '"Manrope", -apple-system, "Segoe UI", sans-serif',
  fontCode: "monospace",

  brandTitle: "🍃 Mori UI",
  brandUrl: "https://github.com",
  brandImage: undefined,
  brandTarget: "_self",

  // Mori UI Colors
  colorPrimary: "#5C4A36",
  colorSecondary: "#2D4620",

  // UI - Light mode
  appBg: "#E7DFD1",
  appContentBg: "#F5EFE7",
  appPreviewBg: "#F5EFE7",
  appBorderColor: "#E1D9CF",
  appBorderRadius: 8,

  // Text colors
  textColor: "#2C2520",
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#8B8680",
  barSelectedColor: "#5C4A36",
  barHoverColor: "#4D3E2D",
  barBg: "#EBE4DA",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#D9CFBF",
  inputTextColor: "#2C2520",
  inputBorderRadius: 6,
});
