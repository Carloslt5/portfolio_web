// @ts-check
import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  compressHTML: true,
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      minify: "esbuild",
    },
  },
})
