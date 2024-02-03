import { createContext, useState, useEffect } from "react";
import axios from "axios";
import errorAndSucessConnectApi from "../components/Toastys/errorAndSucessConnectApi";

export const DadosProduto = createContext();

export default function DadosProvider({ children }) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/");
        setDados(response.data);
        errorAndSucessConnectApi({toastyType: "success", text: "API acessada com sucesso"})
      } catch (error) {
        console.error("Erro ao acessar a API:", error.message);
        errorAndSucessConnectApi({toastyType: "error", text: "Erro ao acessar a API"})
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
