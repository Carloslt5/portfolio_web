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
    },
    plugins: [tailwindcss()],
  },
})
