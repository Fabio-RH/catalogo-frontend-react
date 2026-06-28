import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

interface Props {
  product: any;
  onDelete?: (id: number) => void;
  onEdit?: (product: any) => void;
}

export default function ProductCard({
  product,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className={styles.card}>
      <img
        src={
          product.urlImagem && product.urlImagem.trim() !== ""
            ? product.urlImagem
            : "https://via.placeholder.com/400x250?text=Sem+Imagem"
        }
        alt={product.nomeProduto}
        className={styles.image}
      />

      <div className={styles.content}>
        <div>
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

        <div className={styles.actions}>
          <Link
            to={`/produto/${product.idProduto}`}
            className={`${styles.button} ${styles.view}`}
          >
            Ver
          </Link>

          <button
            onClick={() => onEdit?.(product)}
            className={`${styles.button} ${styles.edit}`}
          >
            Editar
          </button>

          <button
            onClick={() => onDelete?.(product.idProduto)}
            className={`${styles.button} ${styles.delete}`}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}