import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function favoritado(tipoProduto) {
    toast.success(`${tipoProduto} adicionado(a) a Wishlist`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style:{
            color: "#333333",
            fontFamily: "Source Sans Pro SemiBold",
        },
        icon: <img src="/logo_netshoes.png" alt="Logo da Nethshoes"  className='rounded-sm'/>,
    })
}
