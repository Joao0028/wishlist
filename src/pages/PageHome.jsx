import Produto from "../components/Produto";

export default function PageHome(){
    return <section className="containerPai my-6">
        <div className="container">
            <Produto 
                nomeProduto={"Kit Meia Invisível Olympikus C/ 3 Pares Masculina"}
                imagem={"https://static.netshoes.com.br/produtos/kit-meia-invisivel-olympikus-c-3-pares-masculina/06/D22-2077-006/D22-2077-006_zoom1.jpg?ts=1695528264&ims=544x"}
            />
        </div>
    </section>
}