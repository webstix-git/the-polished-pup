import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        nav: "1130px",
      },
      colors: {
        deep: "#1B4332",
        forest: "#2D6A4F",
        gold: {
          DEFAULT: "#C9A227",
          light: "#E8D08B",
        },
        cream: "#FAF8F3",
        sage: "#EDF2EC",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-jakarta)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(27, 67, 50, 0.04), 0 8px 24px -12px rgba(27, 67, 50, 0.15)",
        lifted: "0 2px 4px rgba(27, 67, 50, 0.05), 0 24px 48px -20px rgba(27, 67, 50, 0.28)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "fade-in": "fade-in 400ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
