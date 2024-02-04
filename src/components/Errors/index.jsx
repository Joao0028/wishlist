import styles from "./Errors.module.scss";
import erroApi from "../../assets/images/erroApi.svg";
import semItens from "../../assets/images/semItens.svg";
import semItensMobile from "../../assets/images/semItensMobile.svg";

export default function Errors({ erro }) {
  const tamanhoTela = window.screen.width;
  const condicaoTamanho = tamanhoTela > 500 ? semItens : semItensMobile;

  const erroAPi = (
    <div className={styles.containerErrors}>
      <img
        src={erroApi}
        alt="Uma imagem animada, que ilustra a falta de conexão entre a aplicação e a API."
      />
      <a
        href="https://github.com/Joao0028/api-wishlist"
        target="_blank"
        className="subtitulo"
      >
        Você precisa <span>iniciar a API</span> para que funcione corretamente.
      </a>
    </div>
  );
  const listaVazia = (
    <div className={styles.containerErrors}>
      <img
        src={condicaoTamanho}
        alt="Uma imagem animada, que ilustra a falta de itens na Wishlist."
      />
      <p className="subtitulo">
        Você não possui nenhum item na <span>Wishlist</span>.
      </p>
    </div>
  );

  function erroEscolhido() {
    if (erro == 1) {
      return erroAPi;
    } else if (erro == 2) {
      return listaVazia;
    }
  }

  return erroEscolhido();
}
