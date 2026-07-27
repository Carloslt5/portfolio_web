// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      minify: "esbuild",
      cssTarget: ["chrome100", "firefox100", "safari15", "edge100"],
    },
    plugins: [tailwindcss()],
  },
})
