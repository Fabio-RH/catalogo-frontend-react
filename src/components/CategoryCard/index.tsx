import styles from "./CategoryCard.module.css";

interface Props {
  category: any;
  onDelete?: (id: number) => void;
  onEdit?: (category: any) => void;
}

export default function CategoryCard({
  category,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className={styles.card}>
      <div>
        <span className={styles.id}>
          Categoria #{category.idCategoria}
        </span>

        <h3 className={styles.title}>
          {category.nomeCategoria}
        </h3>

        <p className={styles.description}>
          {category.descricaoCategoria}
        </p>
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => onEdit?.(category)}
          className={`${styles.button} ${styles.edit}`}
        >
          Editar
        </button>

        <button
          onClick={() => onDelete?.(category.idCategoria)}
          className={`${styles.button} ${styles.delete}`}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}