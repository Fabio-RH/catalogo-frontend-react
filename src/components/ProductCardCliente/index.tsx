import { Link } from "react-router-dom";
import styles from "./ProductCardCliente.module.css";

interface Props {
  product: any;
}

export default function ProductCardCliente({
  product,
}: Props) {
  return (
    <div className={styles.card}>
      <div>
        <img
          src={
            product.urlImagem ||
            "https://via.placeholder.com/300x250?text=Sem+Imagem"
          }
          alt={product.nomeProduto}
          className={styles.image}
        />

        <span className={styles.category}>
          Categoria #{product.categoriaId}
        </span>

        <h3 className={styles.title}>
          {product.nomeProduto}
        </h3>

        <div className={styles.priceContainer}>
          <span className={styles.price}>
            R$ {Number(product.precoProduto).toFixed(2)}
          </span>
        </div>

        <div className={styles.stock}>
          Estoque #{product.estoqueId}
        </div>
      </div>

      <div className={styles.footer}>
        <Link
          to={`/produto/${product.idProduto}`}
          className={styles.button}
        >
          Ver Produto
        </Link>
      </div>
    </div>
  );
}