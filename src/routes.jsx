import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import DadosProvider from "./context/DadosProduto";
import { ToastContainer } from "react-toastify";

const Home = lazy(() => import("./pages/PageHome"));
const Lista = lazy(() => import("./pages/Wishlist"));

export default function AppRoutes() {
  return (
    <main>
      <ToastContainer />
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <DadosProvider>
            <Header />
            <Breadcrumbs />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Lista />} />
            </Routes>
          </DadosProvider>
        </Suspense>
      </BrowserRouter>
    </main>
  );
}
