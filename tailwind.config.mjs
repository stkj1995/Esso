/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  /* Primitives - Mode 1 */
  theme: {
    fontFamily: {
      //     sans: ['Prompt', 'sans-serif'],
      //     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
      //
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

      borderadius: {
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

/* Tilføj din egen farvepalette nedenfor - Skal sættes i theme */
// colors: {
//     transparent: 'transparent',
//     current: 'currentColor',
//     'farvenavn': {
//         50: '#hexkode',
//         100: '#hexkode',
//         200: '#hexkode',
//         300: '#hexkode',
//         400: '#hexkode',
//         500: '#hexkode',
//         600: '#hexkode',
//         700: '#hexkode',
//         800: '#hexkode',
//         900: '#hexkode',
//     },
//     'white': '#fff',
//     'black': '#000',
// },

/* Tilføj din egen spacing nedenfor */
// spacing: {
//     'm': '40px',
// },

/* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
// fontFamily: {
//     sans: ['Prompt', 'sans-serif'],
//     'display': ['Courier', 'monospace'], /* eksempel på ekstra font */
// },

/* Tilføj dit typografiske hierarki herunder */
// fontSize: {
//     base: ['1rem', { lineHeight: '1.5rem' }],
//     large: ['2.5rem', { lineHeight: '3.75rem' }],
//   },

/* Tilføj dit fontvægt-hierarki nedenfor */
//   fontWeight: {
//     regular: '400',
//   },

/* Borders - borderstørrelser herunder */
// borderWidth: {
//     DEFAULT: '1px',
//     0: '0px',
//     2: '2px',
// },

/* Border radius størrelser herunder */
// borderRadius: {
//     DEFAULT: '1.25rem',
//     none: '0px',
// },

/* Box shadows herunder */
// boxShadow: {
//     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
// },
