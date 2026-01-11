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
        // 🎨 테마 색상 - globals.css의 CSS 변수 참조
        theme: {
          primary: "var(--theme-primary)",
          "primary-hover": "var(--theme-primary-hover)",
          header: "var(--theme-header)",
          "header-hover": "var(--theme-header-hover)",
          nav: "var(--theme-nav)",
          accent: "var(--theme-accent)",
          dark: "var(--theme-dark)",
          "hero-start": "var(--theme-hero-start)",
          "hero-mid": "var(--theme-hero-mid)",
          "hero-end": "var(--theme-hero-end)",
        },
        // 기존 색상 (호환성 유지)
        primary: {
          50: "var(--color-primary-50, #eff6ff)",
          100: "var(--color-primary-100, #dbeafe)",
          200: "var(--color-primary-200, #bfdbfe)",
          300: "var(--color-primary-300, #93c5fd)",
          400: "var(--color-primary-400, #60a5fa)",
          500: "var(--color-primary-500, #3b82f6)",
          600: "var(--color-primary-600, #2563eb)",
          700: "var(--color-primary-700, #1d4ed8)",
          800: "var(--color-primary-800, #1e40af)",
          900: "var(--color-primary-900, #1e3a8a)",
        },
        secondary: {
          50: "var(--color-secondary-50, #fefce8)",
          100: "var(--color-secondary-100, #fef3c7)",
          200: "var(--color-secondary-200, #fde68a)",
          300: "var(--color-secondary-300, #fcd34d)",
          400: "var(--color-secondary-400, #fbbf24)",
          500: "var(--color-secondary-500, #f59e0b)",
          600: "var(--color-secondary-600, #d97706)",
          700: "var(--color-secondary-700, #b45309)",
          800: "var(--color-secondary-800, #92400e)",
          900: "var(--color-secondary-900, #78350f)",
        },
        accent: "var(--color-accent, #8b5cf6)",
        neutral: "var(--color-neutral, #6b7280)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
      },
      fontFamily: {
        heading: "var(--font-heading, ui-serif)",
        body: "var(--font-body, ui-sans-serif)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;