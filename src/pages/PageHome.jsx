import {  useContext, useEffect, useMemo, useState } from "react";
import Produto from "../components/Produto";
import axios from "axios";
import { DadosProduto } from "../context/DadosProduto";
import Errors from "../components/Errors";

export default function PageHome() {
    document.title = "Home"
    const { dados, setDados } = useContext(DadosProduto);
    const [resposta, setResposta] = useState(null)

    useEffect(() => {
        if(dados.length == 0){
            setResposta(<Errors erro={1}/>)
            return;
        } else {
            return setResposta(dados.map((dadosProduto) => (
                <Produto
                    imagem={dadosProduto.imagem}
                    nomeProduto={dadosProduto.nomeProduto}
                    key={dadosProduto.id}
                    estadoFavoritado={dadosProduto.favoritado}
                    tipoProduto={dadosProduto.tipo}
                    funcaoFavoritar={() => {
                        axios
                            .put(`http://localhost:3001/${dadosProduto._id}`, { favoritado: !dadosProduto.favoritado })
                            .then(() => {
                                // Atualize o estado local usando o setDados do contexto
                                setDados((prevDados) => {
                                    const updatedData = [...prevDados];
                                    const index = updatedData.findIndex((item) => item._id === dadosProduto._id);
                                    if (index !== -1) {
                                        updatedData[index] = { ...updatedData[index], favoritado: !dadosProduto.favoritado };
                                    }
                                    return updatedData;
                                });
                            })
                            .catch((error) => {
                                console.error('Erro ao atualizar favorito:', error.message);
                            });
                    }}
                />
            )))
        }
    },[dados])

    return (
        <section className="containerPai my-6">
            <div className="container estilosLista">
                {resposta}
            </div>
        </section>
    );
}
