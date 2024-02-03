import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function desfavoritado(tipoProduto){
    toast.info(`${tipoProduto} removido da Wishlist!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}