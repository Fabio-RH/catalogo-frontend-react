import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Encontre Sua Camisa Perfeita
        </h1>

        <p className={styles.subtitle}>
          Qualidade premium, conforto incomparável e estilo único
        </p>
      </div>
    </section>
  );
}