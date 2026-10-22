import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF9F6",
        surface: "#FFFFFF",
        credibility: "#0F172A",
        "brand-blue": "#2563EB",
        "growth-green": "#059669",
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
