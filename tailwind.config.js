/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: {
        DEFAULT: "hsl(var(--background))",
        2: "hsl(var(--background-2))",
        3: "hsl(var(--background-3))",
      },
      foreground: {
        DEFAULT: "hsl(var(--foreground))",
        2: "hsl(var(--foreground-2))",
      },
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
