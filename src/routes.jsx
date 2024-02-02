import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/PageHome"));
const Lista = lazy(() => import("./pages/Wishlist"));

export default function AppRoutes() {
  return (
    <main>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header />
          <Breadcrumbs />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Lista />} />
            </Routes>
           <Footer />
        </Suspense>
      </BrowserRouter>
    </main>
  );
}
