"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../app/styles/forms.module.css";
import Header from "@/app/components/header";

export default function CadastroUsuario() {
  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        setMessage("Usuário cadastrado com sucesso!");
        router.push("/login");
      } else {
        setMessage("Erro ao cadastrar usuário.");
      }
    } catch (error) {
      setMessage("Erro ao conectar com a API.");
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <h2 className={styles.header}>Cadastrar Usuário</h2>
      {message && <div className={styles.alert}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nome" className={styles.formLabel}>
            Nome
          </label>
          <input
            type="text"
            className={styles.formControl}
            id="nome"
            value={usuario.nome}
            onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            type="email"
            className={styles.formControl}
            id="email"
            value={usuario.email}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            required
          />
        </div>

        <button type="submit" className={styles.btnPrimary}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
