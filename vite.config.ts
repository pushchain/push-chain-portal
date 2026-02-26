// vite.config.ts
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

    // Keep polyfills, but avoid pulling in unnecessary shims that can affect deps
    nodePolyfills({
      globals: {
        Buffer: true,
        process: true,
        global: true,
      },
      protocolImports: true,
    }),
  ],

  define: {
    global: "globalThis",
    historyApiFallback: true,
  },

  resolve: {
    dedupe: [
      // --- WalletConnect ---
      "@walletconnect/ethereum-provider",
      "@walletconnect/modal",
      "@walletconnect/sign-client",
      "@walletconnect/universal-provider",
      "@walletconnect/core",
      "@walletconnect/utils",
      "@walletconnect/jsonrpc-provider",
      "@walletconnect/jsonrpc-utils",

      // --- Web3Modal (if present transitively) ---
      "@web3modal/common",
      "@web3modal/core",
      "@web3modal/ui",

      // --- Reown AppKit (this is what your stack actually uses) ---
      "@reown/appkit",
      "@reown/appkit-core",
      "@reown/appkit-ui",
      "@reown/appkit-wallet",

      // --- Lit stack (critical for `f is not a function`) ---
      "lit",
      "lit-html",
      "lit-element",
      "@lit/reactive-element",
      "@lit-labs/motion",
      "@lit-labs/ssr-dom-shim",
    ],
  },

  optimizeDeps: {
    include: [
      // WalletConnect
      "@walletconnect/ethereum-provider",
      "@walletconnect/modal",
      "@walletconnect/sign-client",
      "@walletconnect/universal-provider",
      "@walletconnect/core",
      "@walletconnect/utils",

      // Web3Modal (if present)
      "@web3modal/common",
      "@web3modal/core",
      "@web3modal/ui",

      // Reown AppKit
      "@reown/appkit",
      "@reown/appkit-core",
      "@reown/appkit-ui",
      "@reown/appkit-wallet",

      // Lit
      "lit",
      "lit-html",
      "lit-element",
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