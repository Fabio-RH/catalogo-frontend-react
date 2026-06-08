import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

import { useEffect, useState } from "react";
import { productService } from "../services/productService";

export default function Catalogo() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await productService.findAll();

        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.nomeProduto
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-4 mb-8">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar produtos..."
            className="
              flex-1
              border
              rounded-lg
              px-4
              py-3
            "
          />

          <select className="border rounded-lg px-4">
            <option>Todas</option>
          </select>

          <select className="border rounded-lg px-4">
            <option>Nome (A-Z)</option>
          </select>
        </div>

        <div className="mb-4 text-sm text-gray-500">
          {filteredProducts.length} produtos encontrados
        </div>

        {loading ? (
          <div className="text-center py-10">
            Carregando produtos...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.idProduto}
                product={product}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}