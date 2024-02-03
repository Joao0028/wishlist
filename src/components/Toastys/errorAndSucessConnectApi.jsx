import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function errorAndSucessConnectApi({toastyType, text}) {
    toast[toastyType](`${text}`, {
        position: "bottom-right",
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
    })
}
