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
      screens: {
        "2xl": "1700px",
        "3xl": "1920px",
        'tall': { 'raw': '(min-height: 900px)' }
      },

      fontSize: {
        sm: "var(--text-sm)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
      },

      borderRadius: {
        sm: "6px",
        md: "10px",
        base: "12px",
        lg: "18px",
        xl: "24px",
        "2xl": "48px",
      },

      colors: {
        brand: "var(--brand)",
        background: "var(--background)",
        fill: {
          DEFAULT: "var(--background-default)",
          secondary: "var(--background-secondary)",
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

        navBackground: "var(--nav-background)",
      },

      backgroundImage: {
        primaryBtnGradient: "var(--gradient-primary)",

        gradientCardBg: "var(--gradient-card-bg)",
        gradientFillCard: "var(--gradient-fill-card)",
        gradientFillDefault: "var(--gradient-fill-default)",

        textGradientDefault: "var(--text-gradient-default)",
        textRadialGradient: "var(--text-radial-gradient)",
        radialGradient: "var(--radial-gradient)",

        gradientHeading: "var(--gradient-heading)",
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
