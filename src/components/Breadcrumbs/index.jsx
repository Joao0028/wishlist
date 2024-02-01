import { Link, useLocation } from "react-router-dom"
import styles from "./Breadcrumbs.module.scss"

export default function Breadcrumbs(){
    const pathAtual = useLocation().pathname;
    const condicionalPathHome = pathAtual === "/wishlist" ? "hover:underline subtitulo" : "subtitulo"
    const condicionalPathWishlist = pathAtual === "/wishlist"? "" : "hidden"

    return <section className="containerPai mt-[60px]" id={styles.BreadcrumbsStyles}>
        <div className="container">    
            <div className="flex">
                <Link to="/"><h2 className={condicionalPathHome}>Home</h2></Link>
                <h2 className={`ml-1 subtitulo ${condicionalPathWishlist}`}>/<span id={styles.negrito}> Wishlist</span></h2>
            </div>
            <hr />
        </div>
    </section>
}