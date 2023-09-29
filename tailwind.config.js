/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontSize:{
         sidebartext:"15px",
        },
        fontFamily:{
         sidebarfont:['Roboto','Arial','sans-serif'],
        },
        width:{
          headerSearch:"732px",
          sidebar:"17.666667%",
        },
        colors:{
          hamburger:"#545454",
          search:"#f8f8f8"
        }
      },
    },
    plugins: [],
  }