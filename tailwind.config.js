/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FE5F00",
          secondary: "#00f",
          accent: "#FFB100",
          neutral: "#D3D3D3", //fix
          "base-100": "#ffffff", // white
          "base-200": "E5E4E2", // fix
          "base-content": "#000000", // black
          // secondary-content
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#FE5F00",
          secondary: "#00f",
          accent: "#FFB100",
          neutral: "#708090", // fix
          "base-100": "#000000", // black
          "base-200": "#211f21", // fix
          "base-content": "#ffffff", // white
        },
      },
    ],
  },
};
