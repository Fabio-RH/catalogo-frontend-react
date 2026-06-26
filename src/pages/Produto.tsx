import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/footer";
import { productService } from "../services/productService";

export default function Produto() {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function loadProduct() {
      try {
        if (!id) return;

        const data = await productService.findById(id);

        console.log("Produto recebido:", data);

        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />

        <div className="max-w-6xl mx-auto p-10">
          <div className="h-96 bg-gray-200 animate-pulse rounded-xl" />
        </div>

        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />

        <div className="max-w-6xl mx-auto p-10">
          Produto não encontrado.
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* IMAGEM */}
          <div className="bg-white border rounded-xl shadow-sm p-4">
            <img
              src={
                product.urlImagem && product.urlImagem.trim() !== ""
                  ? product.urlImagem
                  : "https://via.placeholder.com/600x600?text=Sem+Imagem"
              }
              alt={product.nomeProduto}
              className="w-full h-[500px] object-cover rounded-lg"
              onError={(e) => {
                console.error(
                  "Erro ao carregar imagem:",
                  product.urlImagem
                );

                e.currentTarget.src =
                  "https://via.placeholder.com/600x600?text=Sem+Imagem";
              }}
            />
          </div>

          {/* DADOS */}
          <div className="bg-white border rounded-xl shadow-sm p-8">
            <span className="text-blue-600 text-sm">
              Categoria #{product.categoriaId}
            </span>

            <h1 className="text-3xl font-bold mt-2">
              {product.nomeProduto}
            </h1>

            <div className="text-4xl text-blue-600 font-bold mt-6">
              R$ {Number(product.precoProduto).toFixed(2)}
            </div>

            <div className="mt-4 text-gray-600">
              Estoque ID: {product.estoqueId}
            </div>

            <div className="mt-8">
              <p className="font-medium mb-2">
                Quantidade
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                  className="border w-10 h-10 rounded-lg"
                >
                  -
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="border w-10 h-10 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="
                mt-8
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-lg
              "
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}