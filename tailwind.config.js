/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050a12",
          900: "#0a1628",
          850: "#0d1f35",
          800: "#122742",
          700: "#1a3556",
          600: "#1f3864",
        },
        brass: {
          light: "#e2d4b7",
          muted: "#a8936c",
          DEFAULT: "#8d7850",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: { cap: "0.22em" },
    },
  },
  plugins: [],
};
