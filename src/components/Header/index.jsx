import { FaRegHeart} from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import MenuUser from "./MenuUser";
import { Link, useLocation } from "react-router-dom";

export default function Header(){

    const location = useLocation();
    const pathAtual = location.pathname
    const condicaoPath = pathAtual === "/wishlist" ? 
    <Link to="/" className="flex items-center gap-2"><IoHomeOutline className="icone"/> <h2 className="max-md:hidden subtitulo">Home</h2></Link>
    : <Link to="/wishlist" className="flex items-center gap-2"><FaRegHeart className="icone"/> <h2 className="max-md:hidden subtitulo">Wishlist</h2></Link>
    
    return <header className="containerPai bg-cor-roxoClaroNetshoes h-[90px] fixed top-0">
            <section className="container flex justify-between text-cor-branco">
                <h1 className="w-[160px] h-[79px] flex items-center max-sm:w-[140px]">
                    <img className="w-full" src="//static.netshoes.com.br/2.89.1/netshoesbr/images/logo.png" alt="Nome da Netshoes com letras brancas e em negrito." />
                </h1>
                <nav className="flex gap-4 md:gap-6 items-center ">
                   {condicaoPath}
                    <div className="flex flex-col">
                        <MenuUser />
                    </div>
                </nav>
            </section>
    </header>
}