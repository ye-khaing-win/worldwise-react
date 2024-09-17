/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        hero: "calc(100vh - 5rem)",
        sidebar: "calc(100vh - 4.8rem)",
      },

      backgroundImage: {
        hero: () =>
          'linear-gradient(rgba(36, 42, 46, 0.8),rgba(36, 42, 46, 0.8)),url("../bg.jpg")',
        spinner: () =>
          "conic-gradient(#0000 10%, var(--color-light--2))",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "brand-1": "#ffb545",
        "brand-2": "#00c46a",
        "dark-0": "#242a2e",
        "dark-1": "#2d3439",
        "dark-2": "#42484d",
        "light-1": "#aaa",
        "light-2": "#ececec",
        "light-3": "#d6dee0",
      },
    },
  },
  plugins: [],
};
