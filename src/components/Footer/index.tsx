import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Empresa */}
          <div>
            <h3 className={styles.logo}>
              ShirtStore
            </h3>

            <p className={styles.description}>
              As melhores camisas com qualidade premium para você.
              Moda, conforto e estilo em um só lugar.
            </p>

            <div className={styles.social}>
              <Facebook className={styles.icon} size={18} />
              <Instagram className={styles.icon} size={18} />
              <Twitter className={styles.icon} size={18} />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className={styles.title}>
              Links Rápidos
            </h3>

            <ul className={styles.list}>
              <li>Catálogo</li>
              <li>Meus Pedidos</li>
              <li>Carrinho</li>
              <li>Sobre Nós</li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className={styles.title}>
              Categorias
            </h3>

            <ul className={styles.list}>
              <li>Básicas</li>
              <li>Premium</li>
              <li>Polos</li>
              <li>Casuais</li>
              <li>Fashion</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className={styles.title}>
              Contato
            </h3>

            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <MapPin size={18} />
                <span>Rua das Camisas, 123 São Paulo - SP</span>
              </div>

              <div className={styles.contactItem}>
                <Phone size={18} />
                <span>(11) 9999-9999</span>
              </div>

              <div className={styles.contactItem}>
                <Mail size={18} />
                <span>contato@shirtstore.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          © 2026 ShirtStore. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}