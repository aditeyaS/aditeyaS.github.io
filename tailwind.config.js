/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      green: "hsl(var(--green))",
      primary: "hsl(var(--primary))",
    },
    extend: {
      fontFamily: {
        code: ["Roboto Mono", "Courier", "monospace"],
        normal: ["Montserrat", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};
