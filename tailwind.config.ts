import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        "2xl": "var(--text-2xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
      },

      borderRadius: {
        sm: "6px",
        md: "10px",
        base: "12px",
        lg: "24px",
        "2xl": "48px",
      },

      colors: {
        background: "var(--background)",
        fill: {
          DEFAULT: "var(--background-default)",
          tertiary: "var(--background-tertiary)"
        },
        surface: {
          DEFAULT: "var(--background-surface)",
          secondary: "var(--background-surface-secondary)",
        },

        borderSoft: "var(--border-soft)",
        borderLight: "var(--border-light)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
      },

      backgroundImage: {
        primaryBtnGradient: "var(--gradient-primary)",

        gradientCardBg: "var(--gradient-card-bg)",
        gradientFillCard: "var(--gradient-fill-card)",

        textGradientDefault: "var(--text-gradient-default)",
      },

      backdropBlur: {
        lg: "30px"
      }
    },
  },
  plugins: [],
  corePlugins: {
    container: false
  }
};
export default config;
