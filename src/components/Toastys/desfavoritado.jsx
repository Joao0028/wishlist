import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function desfavoritado(tipoProduto){
    toast.info(`${tipoProduto} removido(a) da Wishlist!`, {
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
            fontFamily: "Source Sans Pro SemiBold"
        },
        progressStyle: {
            background: "#5a2d82"
        },
        icon: <img src="/logo_netshoes.png" alt="Logo da nethshoes"  className='rounded-sm'/>
    })
}