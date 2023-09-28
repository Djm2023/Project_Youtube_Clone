/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        width:{
          headerSearch:"732px",
        },
        colors:{
          hamburger:"#545454",
          search:"#f8f8f8"
        }
      },
    },
    plugins: [],
  }