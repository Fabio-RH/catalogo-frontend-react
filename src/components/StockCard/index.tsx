import styles from "./StockCard.module.css";

interface Props {
  stock: any;
  onDelete?: (id: number) => void;
  onEdit?: (stock: any) => void;
}

export default function StockCard({
  stock,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className={styles.card}>
      <div>
        <span className={styles.id}>
          Estoque #{stock.idEstoque}
        </span>

        <h3 className={styles.title}>
          Quantidade: {stock.quantidadeEstoque}
        </h3>

        <p className={styles.status}>
          Disponibilidade:{" "}
          {stock.disponibilidadeEstoque}
        </p>
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => onEdit?.(stock)}
          className={`${styles.button} ${styles.edit}`}
        >
          Editar
        </button>

        <button
          onClick={() => onDelete?.(stock.idEstoque)}
          className={`${styles.button} ${styles.delete}`}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}