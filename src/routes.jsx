import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/PageHome"))
const Lista = lazy(() => import("./pages/PageList"))

export default function AppRoutes(){
    return <main>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/ListaItens" element={<Lista />}/>
            </Routes>
        </BrowserRouter>
    </main>
}