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
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--foreground-secondary)",
            "--tw-prose-headings": "#fff",
            "--tw-prose-lead": "#fff",
            "--tw-prose-links": "var(--brand)",
            "--tw-prose-bold": "#fff",
            "--tw-prose-counters": "#fff",
            "--tw-prose-bullets": "#fff",
            "--tw-prose-hr": "rgba(255, 255, 255, 0.10)",
            "--tw-prose-quotes": "var(--foreground-secondary)",
            "--tw-prose-quote-borders": "var(--brand)",
            "--tw-prose-captions": "var(--foreground-secondary)",
            "--tw-prose-code": "yellow",
            "--tw-prose-pre-code": "green",
            "--tw-prose-pre-bg": "purple",
            "--tw-prose-th-borders": "orange",
            "--tw-prose-td-borders": "orange",
          },
        },
      },

      screens: {
        md: "840px",
        lg: "1080px",
        "2xl": "1600px",
        "3xl": "1920px",
        "short": { 'raw': '(max-height: 760px)' },
        'tall': { 'raw': '(min-height: 900px)' }
      },

      fontSize: {
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
      },

      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "10px",
        base: "12px",
        lg: "18px",
        xl: "24px",
        "2xl": "48px",
      },

      colors: {
        brand: "var(--brand)",
        brandTransparent: "var(--brand-transparent)",
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
      },

      boxShadow: {
        techCardShadow: "0px 1px 1px 0px rgba(255, 255, 255, 0.10)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    container: false
  }
};
export default config;
