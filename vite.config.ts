import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import svgr from "vite-plugin-svgr";
import topLevelAwait from "vite-plugin-top-level-await";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";

import { getPreviewBasePath } from "./basePath";

export default defineConfig({
  plugins: [
    topLevelAwait(),
    react(),
    svgr(),
    viteTsconfigPaths({ root: "./" }),
    nodePolyfills(),
  ],

  server: {
    port: 3000,
  },

  base: getPreviewBasePath() || undefined,

  build: {
    outDir: "build",
    sourcemap: true,

    commonjsOptions: {
      transformMixedEsModules: true,
    },

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        rewards: path.resolve(__dirname, "rewards.html"),
      },
    },
  },
});