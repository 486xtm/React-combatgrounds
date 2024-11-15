/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add paths to all your template files here
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-gray-linear":
          "linear-gradient(180deg, #FBFBFB 0%, #EDEDED 52%, #C5C4C4 100%)",
        "gradient-white-linear":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)",
        "gradient-progressbar-bg":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.02) 100%)",
        "gradient-progressbar-thumb":
          "linear-gradient(180deg, #47B0FF 0%, #3E9ADF 49%, #3587CB 100%)",
        "gradient-progressbar-thumb-dark":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.66) 51%, rgba(0, 0, 0, 0.88) 97%)",
      },
      boxShadow: {
        "dark-purple": "0 2px 0 0 #4940AE",
        "light-gray": "0 0 4px 0 #00000055",
        card: "0 8px 20px 0 #00000011",
      },
      colors: {
        primary: "rgb(129, 132, 60)",
        secondary: "rgb(255, 255, 0)",
        "dark-primary": "rgb(102, 102, 51)",
        "dark-secondary": "rgb(210, 180, 140)",
        "custom-gray": "rgb(51, 51, 51)",
        "custom-green": "#4F6D26",
        "custom-light-green": "rgb(102, 153, 51)",
        navyseal: "rgb(108, 108, 255)",
        "dark-navyseal": "rgb(0, 0, 111)",
        terrorist: "rgb(211, 100, 53)",
        "dark-terrorist": "rgb(136, 0, 0)",
        "secondary-green": "#666630",
        "custom-border": "#D9D9D9",
        "custom-dark": "#151A1E",
        "custom-light-gray": "#FAFAFA",
        "custom-dark-purple": "#4940AE",
      },
      fontSize: {
        xxl: "1.7rem",
        tiny: "0.84rem",
      },
      boxShadow: {
        glow: "0 0 12px rgba(255, 255, 255, 0.5)",
        glow_small: "0 0 5px rgba(255, 255, 255, 0.5)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
      },
      textShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)",
        "glow-animated":
          "0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 1), 0 0 40px rgba(0, 255, 255, 0.7), 0 0 50px rgba(0, 255, 255, 0.5)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      filter: {
        "shadow-filter": "drop-shadow(0px 4px 19.9px rgba(0, 0, 0, 0.48))",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("tailwindcss-filters")],
};
