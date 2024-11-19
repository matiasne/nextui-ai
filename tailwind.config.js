import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        customblue: {
          DEFAULT: "#0000FF", // Main color for "customBlue"
          light: "#0000FF", // Optional lighter variant
          dark: "#0000FF", // Optional darker variant
        },
        error: {
          DEFAULT: "#00FF00", // Main color for "error"
          light: "#FF0000", // Optional lighter variant
          dark: "#FF0000", // Optional darker variant
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        fontSize: {
          xxs: "10px", // text-xxs
          xs: "12px", // text-xs
          sm: "14px", // text-sm
          md: "16px", // text-md
          lg: "24px", // text-lg
          xl: "32px", // text-xl
          "2xl": "48px", // text-2xl
        },
        fontWeight: {
          regular: "300",
          normal: "500", // font-normal
          bold: "600", // font-bold
          black: "900",
        },
        lineHeight: {
          tiny: "1rem", // text-tiny
          small: "1.25rem", // text-small
          medium: "1.5rem", // text-medium
          large: "1.75rem", // text-large
        },
        radius: {
          small: "4px", // rounded-small
          medium: "8px", // rounded-medium
          large: "16px", // rounded-large
        },
        borderWidth: {
          hairline: "0.66px", // border-hairline
          small: "1px", // border-small
          medium: "2px", // border-medium (default)
          large: "4px", // border-large
        },
      },
      themes: {
        dark: {
          colors: {
            background: "#212121", // or DEFAULT
            foreground: "#FFFFFF",
            neutrals: {
              0: "#FFFFFF",
              50: "#F6F6F6",
              100: "#E4E4E4",
              200: "#CACACA",
              300: "#B8B8B8",
              400: "#A6A6A6",
              500: "#858585",
              600: "#646464",
              700: "#424242",
              800: "#212121",
              900: "#000000",
            },
            primary: {
              DEFAULT: "#FC6E51",
              50: "#FFE5E0",
              100: "#FFC1B3",
              200: "#FF9C8C",
              300: "#FF7870",
              400: "#FF5454",
              500: "#FC6E51", // Base color
              600: "#D95A3E",
              700: "#B7462B",
              800: "#9A3220",
              900: "#7D1E15",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#00AF9F",
              50: "#E0F8F6",
              100: "#B3EDEB",
              200: "#8CE2E0",
              300: "#66D7D5",
              400: "#40CCCA",
              500: "#00AF9F", // Base color
              600: "#009B8C",
              700: "#008078",
              800: "#006B65",
              900: "#00524D",
              foreground: "#FFFFFF",
            },

            focus: "#FC6E51",
          },
        },
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#000000",
            neutrals: {
              0: "#FFFFFF",
              50: "#F6F6F6",
              100: "#E4E4E4",
              200: "#CACACA",
              300: "#B8B8B8",
              400: "#A6A6A6",
              500: "#858585",
              600: "#646464",
              700: "#424242",
              800: "#212121",
              900: "#000000",
            },
            primary: {
              DEFAULT: "#FC6E51",
              50: "#FFE5E0",
              100: "#FFC1B3",
              200: "#FF9C8C",
              300: "#FF7870",
              400: "#FF5454",
              500: "#FC6E51", // Base color
              600: "#D95A3E",
              700: "#B7462B",
              800: "#9A3220",
              900: "#7D1E15",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#00AF9F",
              50: "#E0F8F6",
              100: "#B3EDEB",
              200: "#8CE2E0",
              300: "#66D7D5",
              400: "#40CCCA",
              500: "#00AF9F", // Base color
              600: "#009B8C",
              700: "#008078",
              800: "#006B65",
              900: "#00524D",
              foreground: "#FFFFFF",
            },

            focus: "#FC6E51",
          },
        },
      },
    }),
  ],
};
