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

  define: {
    global: "globalThis",
    historyApiFallback: true,
  },

  resolve: {
    dedupe: [
      "@walletconnect/ethereum-provider",
      "@walletconnect/modal",
      "@walletconnect/sign-client",
      "@walletconnect/universal-provider",
      "@walletconnect/core",
      "@walletconnect/utils",
      "@walletconnect/jsonrpc-provider",
      "@walletconnect/jsonrpc-utils",

      "@web3modal/common",
      "@web3modal/core",
      "@web3modal/ui",

      "lit",
      "lit-html",
      "lit-element",
      "@lit/reactive-element",
      "@lit-labs/motion",
    ],
  },

  optimizeDeps: {
    include: [
      "@walletconnect/ethereum-provider",
      "@walletconnect/modal",
      "@walletconnect/sign-client",
      "@walletconnect/universal-provider",
      "@walletconnect/core",
      "@walletconnect/utils",

      "@web3modal/common",
      "@web3modal/core",
      "@web3modal/ui",

      "lit",
      "@lit/reactive-element",
    ],
  },

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