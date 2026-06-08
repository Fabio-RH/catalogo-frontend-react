import { Routes, Route } from "react-router-dom";

import Catalogo from "../pages/Catalogo";
import Produto from "../pages/Produto";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Catalogo />} />
      <Route path="/produto/:id" element={<Produto />} />
    </Routes>
  );
}