import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/PageHome"))
const Lista = lazy(() => import("./pages/PageList"))

export default function AppRoutes(){
    return <main>
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/ListaItens" element={<Lista />}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    </main>
}