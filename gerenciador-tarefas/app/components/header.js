"use client";

import Link from "next/link";
import styles from "../../app/styles/header.module.css"; // Importando o CSS modular

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.navLink}>
          Tarefas {/* Nome da logo */}
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/cadastro/cadastroUsuario" className={styles.navLink}>
          Cadastro de Usuários
        </Link>
        <Link href="/cadastro/cadastroTarefa" className={styles.navLink}>
          Cadastro de Tarefas
        </Link>
        <Link
          href="/gerenciamento/gerenciamentoTarefa"
          className={styles.navLink}
        >
          Gerenciamento de Tarefas
        </Link>
      </nav>
    </header>
  );
}
