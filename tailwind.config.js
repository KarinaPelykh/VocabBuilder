/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s: "320px",
      sm: "375px",
      md: "768px",
      xl: "1440px",
    },
    colors: {
      black: "#121417",
      black1: "#12141733",
      green: "#85aa9f",
      green1: "#8bb0a519",
      "green-light": "#00ff00",
      white: "#fcfcfc",
      "white-light": "#fcfcfc",
      white1: "#f8f8f8",
      gray: "#12141780",
      gray1: "#DBDBDB",
      text1: "#121417cc",
      red: "#ff0000",
    },

    fontWeight: {
      bold: "700",
      fixelBold: "600",
      fixelMedium: "500",
      fixelRegular: "400",
      sfLight: "300",
      sfLegular: "400",
    },
    borderRadius: {
      radii: "100%",
      x: "30px",
      m: "15px",
      s: "12px",
      xs: "8px",
    },
    boxShadow: {
      boxShadowS: "0 4px 47px 0 rgba(18, 20, 23, 0.08)",
    },
  },
  plugins: [],
};
