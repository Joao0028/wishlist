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
          cinzaClaro: "#4d4d4d",
          laranja: "#ff8b51",
          azulEscuro: "#0091ea",
          azulClaro: "#37aaf3",
          verdeClaroBackground: "#07c278cc",
          verdeClaroTexto: "#10ba78",
        },
      },
    },
  },
  plugins: [],
};
