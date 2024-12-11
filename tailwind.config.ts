import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffa500",
        secondary: "#b38b00",
        tertiary: "#fff1bf",
        light: "#FFF8F0",
        accent: "#4a08ff",
        "accent-dark": "#3406b3",
        "accent-light": "#9DD9D2",
      },
    },
  },
  plugins: [],
} satisfies Config;
