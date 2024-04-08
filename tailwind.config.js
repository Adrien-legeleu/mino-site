/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayLight: "#535A64",
        grayDark: " #434A54",
        green: "#DCFFBA",
        white: "#FFFFFF",
        blackTransparent: "#20000074",
        whiteGray: "#B2B6BB",
      },
      gridTemplateColumns: {
        "30/70": "35% 65%",
        "80/20": "70% 30%",
        "90/10": "75% 25%",
        "20/80": "20% 80%",
      },
      boxShadow: {
        card: "0 0 30px 0 rgba(0,0,0,0.13)",
        services: "0 10px 50px 0 rgba(200,200,200,0.2)",
        containerService: "10px 0 50px 0 rgba(0,0,0,0.6)",
        offer_shadow: "0px 0 50px 50px rgb(67,74,84)",
        contact_shadow: "0px 0 50px 50px rgb(83,90,100)",
      },
      textShadow: {
        lg: "0 8px 16px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
