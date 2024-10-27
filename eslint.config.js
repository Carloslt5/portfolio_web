import js from "@eslint/js"
import typescriptParser from "@typescript-eslint/parser"
import astroEslintParser from "astro-eslint-parser"
import eslintPluginAstro from "eslint-plugin-astro"
import importPlugin from "eslint-plugin-import"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
    },
  },
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [["builtin"], ["external"], ["internal"], ["parent", "sibling"], ["object"]],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
            {
              pattern: "react*",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "*.css",
              group: "object",
              position: "after",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
            orderImportKind: "ignore",
          },
          pathGroupsExcludedImportTypes: [],
          distinctGroup: true,
          warnOnUnassignedImports: false,
        },
      ],
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    // Define the configuration for `<script>` tag.
    // Script in `<script>` is assigned a virtual file name with the `.js` extension.
    files: ["**/*.{ts,tsx}", "**/*.astro/*.js"],
    languageOptions: {
      parser: typescriptParser,
    },
  },
  {
    ignores: ["dist", "node_modules"],
  },
]
