import { useContext, useEffect, useState } from "react";
import Produto from "../components/Produto";
import axios from "axios";
import { DadosProduto } from "../context/DadosProduto";
import Errors from "../components/Errors";

export default function PageHome() {
    const { dados, setDados } = useContext(DadosProduto);
    const [resposta, setResposta] = useState(null)

    useEffect(() => {
        if(dados.length == 0){
            return setResposta(<Errors erro={1}/>)
        } else {
            return setResposta(dados.length === 0? <h2 className="subtitulo text-center">Você precisa estar iniciando a API para que funcione corretamente.</h2> : dados.map((dadosProduto) => (
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
