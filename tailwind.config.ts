import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: '#D9D9D9',
        reddish: {
          DEFAULT: '#B43F3F',
          dark: '#9e3235'
        },
        accent: '#173B45',
        text: '#000',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
      },
      boxShadow: {
        card: 'inset 0 10px 10px -10px var(--background), inset 0 -10px 10px -10px var(--background)',
      }
    },
  },
  plugins: [],
};
export default config;
