import type { Config } from "tailwindcss";
/* fonts.css */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: "#291870",
        p2: "#1C104D",
        p3: "#190F46",
        pDark: "#130c35",
        s1: "#AC2534",
        s2: "#BE262B",
        s3: "#D32721",
        w1: "#F4F5F7",
        w2: "#ffffff",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        inter: ["Poppins", "sans-serif"],
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
