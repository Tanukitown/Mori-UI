import { render, type RenderResult } from "@testing-library/react";

import type React from "react";

/**
 * Render colors for light mode (matching Mori UI theme)
 * @see styles/main.css for theme colors
 */
const LIGHT_MODE_COLORS = {
  backgroundColor: "#F5EFE7", // --color-bg-primary
  color: "#2C2520", // --color-text-primary
  padding: "1rem",
};

/**
 * Render colors for dark mode
 */
const DARK_MODE_COLORS = {
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  padding: "1rem",
};

/**
 * Render a component with light mode theme background
 * Useful for testing accessibility in light mode context
 *
 * @param element - React element to render
 * @returns Render result from @testing-library/react
 *
 * @example
 * ```tsx
 * const { container } = renderWithLightBg(<Button>Click me</Button>);
 * const results = await axe(container);
 * ```
 */
export const renderWithLightBg = (
  element: React.ReactElement,
): RenderResult => {
  return render(<div style={LIGHT_MODE_COLORS}>{element}</div>);
};

/**
 * Render a component with dark mode theme background
 * Useful for testing accessibility in dark mode context
 *
 * @param element - React element to render
 * @returns Render result from @testing-library/react
 *
 * @example
 * ```tsx
 * const { container } = renderWithDarkBg(<Button>Click me</Button>);
 * const results = await axe(container);
 * ```
 */
export const renderWithDarkBg = (element: React.ReactElement): RenderResult => {
  return render(<div style={DARK_MODE_COLORS}>{element}</div>);
};
