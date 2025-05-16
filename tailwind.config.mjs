/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  /* Primitives - Mode 1 */
  theme: {
    fontFamily: {
      Livvic: ["LivvicRegular", "sans-serif"],
      EBGaramond: ["EbGaramond-VariableFont", "serif"],
    },

    fontSize: {
      18: ["18px"],
      20: ["20px"],
      28: ["28px"],
      36: ["36px"],
      44: ["44px"],
      52: ["52px"],
    },

    lineHeight: {
      28: ["28px"],
      38: ["38px"],
    },

    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
    },

    extend: {
      colors: {
        "color-hvid": "#FFFFFFFF",
        "color-creme": "#F7F0E6FF",
        "color-lysebrun": "#703F1DFF",
        "color-mørkebrun": "#4F2C13FF",
      },

      border: {
        "border-1": "1px",
        "border-2": "2px",
      },

      borderRadius: {
        "border-radius-0": "0px",
        "border-radius-25": "25px",
        "border-radius-30": "30px",
        "border-radius-40": "40px",
        "border-radius-50": "50px",
      },

      spacing: {
        "spacing-xs-(mobil)": "10px",
        "spacing-s-(mobil)": "15px",
        "spacing-sm-(mobil)": "18px",
        "spacing-m-(mobil)": "20px",
        "spacing-ml-(mobil)": "30px",
        "spacing-lg-(mobil)": "35px",
        "spacing-xl-(mobil)": "40px",
        "spacing-2xl-(mobil)": "60px",
        "spacing-3xl-(mobil)": "70px",
        "spacing-4xl-(mobil)": "100px",
        "spacing-5xl-(mobil)": "120px",
        "spacing-6xl-(mobil)": "150px",
        "spacing-xs": "10px",
        "spacing-s": "20px",
        "spacing-sm": "30px",
        "spacing-m": "40px",
        "spacing-ml": "48px",
        "spacing-lg": "65px",
        "spacing-xl": "80px",
        "spacing-2xl": "90px",
        "spacing-3xl": "120px",
        "spacing-4xl": "130px",
        "spacing-5xl": "142px",
        "spacing-6xl": "200px",
        "spacing-7xl": "240px",
        "spacing-8xl": "280px",
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
