/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Montserrat", "Roboto", "sans-serif"],
      title: ["Rampart One", "Roboto", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#96cdff",
          secondary: "#ee92c2",
          accent: "#dbd56e",
          neutral: "#808080", //fix
          "base-100": "#ffffff", // white
          "base-200": "E5E4E2", // fix
          "base-content": "#000000", // black
          // secondary-content
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#96cdff",
          secondary: "#ee92c2",
          accent: "#dbd56e",
          neutral: "#708090", // fix
          "base-100": "#000000", // black
          "base-200": "#211f21", // fix
          "base-content": "#ffffff", // white
        },
      },
    ],
  },
};
