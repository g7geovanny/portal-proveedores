/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage:{
        'imagen1': 'url(../src/assets/imagen1.jpg)',
        'imagen2': 'url(../src/assets/imagen2.jpg)',
        'imagen3': 'url(../src/assets/imagen3.jpg)',
      }
    },
  },
  plugins: [],
}


