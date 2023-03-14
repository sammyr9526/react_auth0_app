/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'spaceimg': "url('../src/img/img.png')",
      },
    },
  },
  plugins: [],
};
