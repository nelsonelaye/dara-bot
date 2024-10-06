import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        black: {
          100: "rgba(0, 0, 0, 1)",
          80: "rgba(32,32,32, 1)",
          70: "rgba(31,31,31, 1)",
          60: "rgba(66,66,66, 1)",
        },
        neutral: {
          100: "rgba(242, 242, 242, 1)",
        },
        green: {
          100: "rgba(81, 217, 75, 1)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
