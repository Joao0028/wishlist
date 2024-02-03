import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function favoritado(tipoProduto) {
    toast.success(`${tipoProduto} adicionado a Wishlist`, {
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
