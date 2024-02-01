import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/PageHome"));
const Lista = lazy(() => import("./pages/PageList"));

export default function AppRoutes() {
  return (
    <main>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ListaItens" element={<Lista />} />
            </Routes>
          </Header>
        </Suspense>
      </BrowserRouter>
    </main>
  );
}
