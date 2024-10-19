/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#212121",
        light: "#FCFCFC",
        woodsmoke: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#212121",
        },
      },
      fontSize: {
        h1: "clamp(2em, 8.5vw, 3.125em)",
        h2: "2.5em",
        h3: "2em",
        h4: "clamp(1.1em, 3vw, 1.5em)",
        h5: "1.25em",
        p: "1em",
        small: "0.8em",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.h1"),
          fontWeight: "bold",
        },
        h2: {
          fontSize: theme("fontSize.h2"),
          fontWeight: "bold",
        },
        h3: {
          fontSize: theme("fontSize.h3"),
          fontWeight: "bold",
        },
        h4: {
          fontSize: theme("fontSize.h4"),
          lineHeight: theme("fontSize.h4"),
          fontWeight: "bold",
        },
        h5: {
          fontSize: theme("fontSize.h5"),
          fontWeight: "bold",
        },
        p: {
          fontSize: theme("fontSize.base"),
          marginBottom: theme("spacing.3"),
        },
      })
    },
  ],
}
