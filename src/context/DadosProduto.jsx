import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DadosProduto = createContext();

export default function DadosProvider({ children }) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/");
        setDados(response.data);
        // Remova o console.log aqui
      } catch (error) {
        console.error("Erro ao acessar a API:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <DadosProduto.Provider value={{ dados, setDados }}>
      {children}
    </DadosProduto.Provider>
  );
}
