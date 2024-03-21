import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["var(--h1-font-size)", "var(--h1-line-height)"],
        h2: ["var(--h2-font-size)", "var(--h2-line-height)"],
        h3: ["var(--h3-font-size)", "var(--h3-line-height)"],
        h4: ["var(--h4-font-size)", "var(--h4-line-height)"],
        h5: ["var(--h5-font-size)", "var(--h5-line-height)"],
        h6: ["var(--h6-font-size)", "var(--h6-line-height)"],
        "body-xl": ["1.25rem", "1.5"], // 20px
        "body-lg": ["1.125rem", "1.5"], // 18px
        "body-md": ["1rem", "1.5"], // 16px
        "body-sm": ["0.875rem", "1.5"], // 14px
        "body-xs": ["0.75rem", "1.5"], // 12px
        caption: ["0.75rem", "1.5"], // 12px
        button: ["1rem", "1.5"], // 16px
      },
      fontWeight: {
        h1: "var(--h1-font-weight)",
        h2: "var(--h2-font-weight)",
        h3: "var(--h3-font-weight)",
        h4: "var(--h4-font-weight)",
        h5: "var(--h5-font-weight)",
        h6: "var(--h6-font-weight)",
        p: "var(--p-font-weight)",
        caption: "var(--caption-font-weight)",
        button: "var(--button-font-weight)",
      },
      borderRadius: {
        custom: "var(--border-radius)",
      },
    },

    colors: {
      transparent: "transparent",
      black: "var(--color-black)",
      white: "var(--color-white)",
      primary: {
        140: "var(--color-primary-140)",
        120: "var(--color-primary-120)",
        100: "var(--color-primary-100)",
        80: "var(--color-primary-80)",
        60: "var(--color-primary-60)",
        40: "var(--color-primary-40)",
        20: "var(--color-primary-20)",
        0: "var(--color-primary-0)",
      },
      secondary: {
        140: "var(--color-secondary-140)",
        120: "var(--color-secondary-120)",
        100: "var(--color-secondary-100)",
        80: "var(--color-secondary-80)",
        60: "var(--color-secondary-60)",
        40: "var(--color-secondary-40)",
        20: "var(--color-secondary-20)",
        0: "var(--color-secondary-0)",
      },
      tertiary: {
        140: "var(--color-tertiary-140)",
        120: "var(--color-tertiary-120)",
        100: "var(--color-tertiary-100)",
        80: "var(--color-tertiary-80)",
        60: "var(--color-tertiary-60)",
        40: "var(--color-tertiary-40)",
        20: "var(--color-tertiary-20)",
        10: "var(--color-tertiary-10)",
        0: "var(--color-tertiary-0)",
      },
      alert: {
        success: {
          140: "var(--color-success-140)",
          100: "var(--color-success-100)",
          0: "var(--color-success-0)",
        },
        error: {
          140: "var(--color-error-140)",
          100: "var(--color-error-100)",
          0: "var(--color-error-0)",
        },
        warning: {
          140: "var(--color-warning-140)",
          100: "var(--color-warning-100)",
          0: "var(--color-warning-0)",
        },
        info: {
          140: "var(--color-info-140)",
          100: "var(--color-info-100)",
          0: "var(--color-info-0)",
        },
      },
      gray: {
        100: "var(--color-gray-100)",
        80: "var(--color-gray-80)",
        60: "var(--color-gray-60)",
        40: "var(--color-gray-40)",
        20: "var(--color-gray-20)",
        10: "var(--color-gray-10)",
        0: "var(--color-gray-0)",
      },
    },
    fontFamily: {
      sans: ["var(--font-family-sans)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-family-serif)", ...defaultTheme.fontFamily.serif],
    },
    plugins: [],
  },
};
