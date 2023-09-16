/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1e1e1e",
          "200": "#151618",
          "300": "#15141d",
          "400": "#131416",
          "500": "rgba(255, 255, 255, 0.82)",
        },
        deepskyblue: "#41afff",
        darkgray: "#b2b2c1",
        slategray: "#81818e",
        lightgray: "#d2d0dd",
        whitesmoke: "#f4f4f4",
        skyblue: "#89cff0",
        white: "#fff",
        darkslategray: "#46484d",
        dodgerblue: "#3596ff",
        black: "#000",
        dimgray: "#4f4f4f",
      },
      fontFamily: {
        inter: "Inter",
        epilogue: "Epilogue",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "4xs": "9px",
        "19xl": "38px",
        "40xl": "59px",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      xl: "20px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};