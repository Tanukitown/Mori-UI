import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      insertTypesEntry: true,
    }),
    tailwindcss(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
      name: "TanukiUI",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
  },
  resolve: {
    alias: {
      "@Styles": resolve(__dirname, "styles"),
      "@Utils": resolve(__dirname, "utils"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["lib/**", "utils/**"],
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/main.ts",
      ],
    },
  },
});
