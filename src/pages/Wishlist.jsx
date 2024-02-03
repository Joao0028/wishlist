import { useContext, useEffect, useState } from "react";
import Produto from "../components/Produto";
import { DadosProduto } from "../context/DadosProduto";
import axios from "axios";
import Errors from "../components/Errors";

export default function Wishlist() {
  const { dados, setDados } = useContext(DadosProduto);
  const favoritados = dados.filter((produto) => produto.favoritado == true);

  const [resposta, setResposta] = useState(null);

  useEffect(() => {
    if (dados.length == 0) {
      return setResposta(<Errors erro={1} />);
    } else if (dados.length > 0 && favoritados.length == 0) {
      return setResposta(<Errors erro={2} />);
    } else {
      return setResposta(
        favoritados.map((dadosProduto) => (
          <Produto
            imagem={dadosProduto.imagem}
            nomeProduto={dadosProduto.nomeProduto}
            tipoDeBotao={true}
            key={dadosProduto.id}
            estadoFavoritado={dadosProduto.favoritado}
            tipoProduto={dadosProduto.tipo}
            funcaoFavoritar={() => {
              axios
                .put(`http://localhost:3001/${dadosProduto._id}`, {
                  favoritado: !dadosProduto.favoritado,
                })
                .then(() => {
                  // Atualize o estado local usando o setDados do contexto
                  setDados((prevDados) => {
                    const updatedData = [...prevDados];
                    const index = updatedData.findIndex(
                      (item) => item._id === dadosProduto._id
                    );
                    if (index !== -1) {
                      updatedData[index] = {
                        ...updatedData[index],
                        favoritado: !dadosProduto.favoritado,
                      };
                    }
                    return updatedData;
                  });
                })
                .catch((error) => {
                  console.error("Erro ao atualizar favorito:", error.message);
                });
            }}
          />
        ))
      );
    }
  }, [dados]);

  return (
    <section className="containerPai my-6">
      <div className="container estilosLista">
        {resposta}
      </div>
    </section>
  );
}
