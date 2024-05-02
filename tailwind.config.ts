import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/extensions/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "gs-default": "#111214",
        "gs-green": "#56CA39",
        "gs-white": "#FFF",
        "gs-default-ghost": "#1F2222",
      },
      borderColor: {
        "gs-default": "#111214",
        "gs-green": "#56CA39",
        "gs-white": "#FFF",
        "gs-default-ghost": "#1F2222",
      },
      colors: {
        "gs-default": "#111214",
        "gs-green": "#56CA39",
        "gs-white": "#FFF",
        "gs-default-ghost": "#1F2222",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
