"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../app/styles/forms.module.css"; // Caminho do CSS modular
import Header from "@/app/components/header";

export default function CadastroTarefa() {
  const [tarefa, setTarefa] = useState({
    descricao: "",
    setor: "",
    prioridade: "",
    status: "a fazer", // Status padrão
  });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarefa),
      });

      if (response.ok) {
        setMessage("Tarefa cadastrada com sucesso!");
        router.push("/gerenciamento/gerenciamentoTarefa"); // Redireciona para o painel de gerenciamento de tarefas
      } else {
        setMessage("Erro ao cadastrar tarefa.");
      }
    } catch (error) {
      setMessage("Erro ao conectar com a API.");
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <h2 className={styles.header}>Cadastrar Tarefa</h2>
      {message && <div className={styles.alert}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="descricao" className={styles.formLabel}>
            Descrição
          </label>
          <input
            type="text"
            className={styles.formControl}
            id="descricao"
            value={tarefa.descricao}
            onChange={(e) =>
              setTarefa({ ...tarefa, descricao: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="setor" className={styles.formLabel}>
            Setor
          </label>
          <input
            type="text"
            className={styles.formControl}
            id="setor"
            value={tarefa.setor}
            onChange={(e) => setTarefa({ ...tarefa, setor: e.target.value })}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="prioridade" className={styles.formLabel}>
            Prioridade
          </label>
          <select
            className={styles.formSelect}
            id="prioridade"
            value={tarefa.prioridade}
            onChange={(e) =>
              setTarefa({ ...tarefa, prioridade: e.target.value })
            }
            required
          >
            <option value="baixa">Baixa</option>
            <option value="média">Média</option>
            <option value="alta">Alta</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status" className={styles.formLabel}>
            Status
          </label>
          <select
            className={styles.formSelect}
            id="status"
            value={tarefa.status}
            onChange={(e) => setTarefa({ ...tarefa, status: e.target.value })}
            required
          >
            <option value="a fazer">A Fazer</option>
            <option value="fazendo">Fazendo</option>
            <option value="pronto">Pronto</option>
          </select>
        </div>

        <button type="submit" className={styles.btnPrimary}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
