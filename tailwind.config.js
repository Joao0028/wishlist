/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cor: {
          roxoClaroNetshoes: "#5a2d82",
          roxoEscuroNetshoes: "#370f53",
          branco: "#ffffff",
          preto: "#000000",
          cinzaEscuro: "#333333",
        },
      },
    },
  },
  plugins: [],
};
