/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#344357",
        "custom-red": "#e20201",
      },
    },
  },
  plugins: [],
};
