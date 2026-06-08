import { Link } from "react-router-dom";

interface Props {
  product: any;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/produto/${product.idProduto}`}
      className="
      bg-white
      rounded-xl
      border
      p-4
      shadow-sm
      hover:shadow-lg
      transition
      "
    >
      <span className="text-xs text-blue-600">
        Categoria #{product.categoriaId}
      </span>

      <h3 className="font-semibold mt-2">
        {product.nomeProduto}
      </h3>

      <div className="mt-4">
        <span className="font-bold text-blue-600">
          R$ {Number(product.precoProduto).toFixed(2)}
        </span>
      </div>
    </Link>
  );
}