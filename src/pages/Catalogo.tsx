import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";

import { useEffect, useState } from "react";
import { productService } from "../services/productService";

export default function Catalogo() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    nomeProduto: "",
    precoProduto: "",
    categoriaId: "",
    estoqueId: "",
    urlImagem: "",
  });

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

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleCreateProduct() {
    try {
      const novoProduto = await productService.create({
        nomeProduto: formData.nomeProduto,
        precoProduto: Number(formData.precoProduto),
        categoriaId: Number(formData.categoriaId),
        estoqueId: Number(formData.estoqueId),
      });

      setProducts((prev) => [...prev, novoProduto]);

      setFormData({
        nomeProduto: "",
        precoProduto: "",
        categoriaId: "",
        estoqueId: "",
        urlImagem: "",
      });

      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("Erro ao criar produto");
    }
  }

  const filteredProducts = products.filter((product) =>
    product.nomeProduto?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="
              bg-blue-600
              text-white
              px-5
              py-3
              rounded-lg
              hover:bg-blue-700
            "
          >
            Criar Produto
          </button>
        </div>

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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6">
              Criar Produto
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Nome do Produto"
                value={formData.nomeProduto}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    nomeProduto: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="number"
                placeholder="Preço"
                value={formData.precoProduto}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    precoProduto: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="number"
                placeholder="Categoria ID"
                value={formData.categoriaId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    categoriaId: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="number"
                placeholder="Estoque ID"
                value={formData.estoqueId}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    estoqueId: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-lg"
              />

              <input
                placeholder="URL da Imagem"
                value={formData.urlImagem}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    urlImagem: e.target.value,
                  })
                }
                className="w-full border p-3 rounded-lg"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancelar
              </button>

              <button
                onClick={handleCreateProduct}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}