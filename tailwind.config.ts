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
        offwhite: "var(--offwhite)",
        accent: "var(--accent-color)",
        text: "var(--text-color)",
        icon: "var(--icon-color)",
      },
    },
  },
  plugins: [],
};
export default config;
