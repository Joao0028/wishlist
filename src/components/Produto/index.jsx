import styles from "./Produto.module.scss"
import * as React from 'react';
import EstrelaAvaliativa from "./EstrelaAvaliativa";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegHeart, FaHeart} from "react-icons/fa";
import favoritado from "../Toastys/favoritado";
import desfavoritado from "../Toastys/desfavoritado";

export default function Produto({imagem, nomeProduto, tipoDeBotao, funcaoFavoritar, estadoFavoritado, tipoProduto}){
    const condicaoFavoritado = estadoFavoritado? "bg-red-500" : "lg:hover:bg-red-500 bg-zinc-500"
    const condicaoIcone = estadoFavoritado ? <FaHeart className="icone"/> : <FaRegHeart className="icone"/>
    const mensagemToasty = estadoFavoritado ? desfavoritado : favoritado

    const mudaFavoritoLocal = async () => {
        try {
            await funcaoFavoritar();
            mensagemToasty(tipoProduto)
        } catch (error) {
            console.error('Erro ao executar a função de favoritar:', error);
        }
    }

    const condicaoBotao = tipoDeBotao == undefined ? 
    <button title="Favoritar" onClick={mudaFavoritoLocal} className={`${condicaoFavoritado}`} id={styles.botaoFavoritar} >{condicaoIcone}</button>:
    <button title="Desfavoritar" onClick={mudaFavoritoLocal} id={styles.botaoExcluir} ><AiOutlineClose className="icone"/></button>

    return <div className="border cursor-pointer" id={styles.ProdutoStyles}>
        <div data-testid="imagem-produto" id={styles.containerImagem} style={{backgroundImage: `url(${imagem})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {condicaoBotao}
        </div>
        <div>
            <h2 className="subtitulo text-cor-cinzaEscuro" data-testid="nome-produto">{nomeProduto}</h2>
            <EstrelaAvaliativa />
            <p className="paragrafo line-through text-cor-cinzaClaro">R$229,29</p>
            <h2 className="titulo text-cor-roxoClaroNetshoes">R$150,00</h2>
        </div>
    </div>
}