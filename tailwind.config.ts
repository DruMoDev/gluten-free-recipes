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
        primary: "#86efac",
        secondary: "#f0fdf5",
        text: "#292524",
        accent: "#f5be0b",
        bg: "#fafaf9",
        defaultColor: "#19725d",
      },
    },
  },
  plugins: [],
} satisfies Config;
