import { Routes, Route } from "react-router-dom";

import Catalogo from "../pages/Catalogo";
import CatalogoCliente from "../pages/CatalogoCliente";
import Produto from "../pages/Produto";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Cliente */}
      <Route path="/" element={<CatalogoCliente />} />

      {/* Admin */}
      <Route path="/admin" element={<Catalogo />} />

      {/* Detalhes */}
      <Route path="/produto/:id" element={<Produto />} />
    </Routes>
  );
}