/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro-organize-imports",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  printWidth: 100,
  trailingComma: "all",
  singleQuote: false,
  endOfLine: "auto",
  semi: false,
}
