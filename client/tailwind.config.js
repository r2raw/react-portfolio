/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        60: "60deg",
        30: "30deg",
      },
    },
  },
  plugins: [],
};
