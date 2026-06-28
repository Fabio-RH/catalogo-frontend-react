import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          ShirtStore
        </Link>

        <nav className={styles.menu}>
          <Link to="/">Catálogo</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.cartButton}>
            🛒
          </button>
        </div>
      </div>
    </header>
  );
}