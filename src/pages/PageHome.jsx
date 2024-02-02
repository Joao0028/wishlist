import { useContext } from "react";
import Produto from "../components/Produto";
import axios from "axios";
import { DadosProduto } from "../context/DadosProduto";

export default function PageHome() {
    const { dados, setDados } = useContext(DadosProduto);
    return (
        <section className="containerPai my-6">
            <div className="container flex flex-wrap justify-center gap-4 lg:gap-6 xl:gap-10">
                {dados.map((dadosProduto) => (
                    <Produto
                        imagem={dadosProduto.imagem}
                        nomeProduto={dadosProduto.nomeProduto}
                        key={dadosProduto.id}
                        estadoFavoritado={dadosProduto.favoritado}
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
                ))}
            </div>
        </section>
    );
}
