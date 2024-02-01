import styles from "./Produto.module.scss"

export default function Produto({imagem, nomeProduto, valorSemDesconto, valorComDesconto}){
    return <div className="border cursor-pointer" id={styles.ProdutoStyles}>
        <div id={styles.containerImagem} style={{backgroundImage: `url(${imagem})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        </div>
        <div>
            <h2 className="subtitulo text-cor-cinzaEscuro">{nomeProduto}</h2>
            <p className="paragrafo line-through text-cor-cinzaClaro">R$229,29</p>
            <h2 className="titulo text-cor-roxoClaroNetshoes">R$150,00</h2>
        </div>
    </div>
}