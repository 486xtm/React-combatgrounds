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
      },
      fontSize: {
        xxl: "1.7rem",
        tiny: "0.84rem",
      },
    },
  },
  plugins: [],
};
