import { useContext } from "react";
import Produto from "../components/Produto";
import { DadosProduto } from "../context/DadosProduto";
import axios from "axios";

export default function Wishlist(){
    const { dados, setDados } = useContext(DadosProduto);
    const favoritados = dados.filter(produto => (produto.favoritado == true))

    return <section className="containerPai my-6">
            <div className="container flex flex-wrap justify-center gap-4 lg:gap-6 xl:gap-10">
            {favoritados.map((dadosProduto) => (
                    <Produto
                        imagem={dadosProduto.imagem}
                        nomeProduto={dadosProduto.nomeProduto}
                        tipoDeBotao={true}
                        key={dadosProduto.id}
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
}