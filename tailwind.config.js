// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          light: '#F6F6F6',
          pink: '#FFE2E2',
          blue: '#F6F6F6',
          darkBlue: '#8785A2',
        },
      },
    },
  },
  plugins: [],
}
