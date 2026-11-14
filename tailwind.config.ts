import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F8FC",
        surface: "#FFFFFF",
        credibility: "#111D38",
        "brand-blue": "#2448ED",
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta-sans)", "Arial", "sans-serif"],
        body: ["var(--font-inter)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
