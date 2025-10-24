import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { configureAxe } from "vitest-axe";

configureAxe({
  rules: {
    "color-contrast": { enabled: true },
    "color-contrast-enhanced": { enabled: true },
    "button-name": { enabled: true },
    "aria-required-attr": { enabled: true },
    "aria-valid-attr": { enabled: true },
  },
});

afterEach(() => {
  cleanup();
});
