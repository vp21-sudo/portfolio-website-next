import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#0D0628',
        primary: '#6B0504',
        secondary: '#A3320B',
        nav: "#E6AF2E",
        text: '#FBFFFE',
      }
    },
  },
  plugins: [],
};
export default config;
