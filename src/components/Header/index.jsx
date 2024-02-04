import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import MenuUser from "./MenuUser";

export default function Header() {
    const pathAtual = useLocation().pathname;
    const condicaoPath = pathAtual === "/wishlist" 
    ? 
    <Link to="/" id={styles.linkHeader}>
      <IoHomeOutline className="icone"/> 
      <h2 className="max-md:hidden subtitulo">Home</h2>
    </Link>
    : 
    <Link to="/wishlist" id={styles.linkHeader}>
      <FaRegHeart className="icone"/> 
      <h2 className="max-md:hidden subtitulo">Wishlist</h2>
    </Link>

  return (
    <header className="containerPai" id={styles.headerStyles}>
      <section className="container">
        <h1>
          <img
            src="//static.netshoes.com.br/2.89.1/netshoesbr/images/logo.png"
            alt="Nome da Netshoes com letras brancas e em negrito."
          />
        </h1>
        <nav>
          {condicaoPath}
          <div>
            <MenuUser />
          </div>
        </nav>
      </section>
    </header>
  );
}
