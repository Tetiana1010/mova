import { light } from "@mui/material/styles/createPalette";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      purple: "#A43AFF",
      orange: "ff6D3b",

      "light-green": "#CEEBC7",
      green: "#75bfbc",
      "dark-green": "#1B4332",

      "light-blue": "#B2E5FF",
      blue: "#48CAE4",
      "dark-blue": "#023E8A",

      "light-violet": "#EFCCFF",

      "light-pink": "#FFD6E4",
      pink: "#FF99AC",
      "dark-pink": "#AD1457",

      "light-gray": "#e5e7eb",

      "black-gray": "#524D54",
      gray: {
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      white: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
