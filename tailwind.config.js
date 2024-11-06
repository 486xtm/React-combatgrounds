/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add paths to all your template files here
  ],
  theme: {
    extend: {
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
      },
      fontSize: {
        xxl: "1.7rem",
        tiny: "0.84rem",
      },
      boxShadow: {
        glow: "0 0 12px rgba(255, 255, 255, 0.5)",
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
