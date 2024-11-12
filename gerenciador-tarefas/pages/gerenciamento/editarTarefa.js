"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../app/styles/editTask.module.css"; // Importação do CSS modular
import Header from "@/app/components/header";

export default function EditarTarefa() {
  const router = useRouter();
  const { query } = router; // Acessando a query para pegar o `id`
  const [task, setTask] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (query.id) {
      // Buscar os dados da tarefa com base no id passado pela URL
      const fetchTask = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/tasks/${query.id}`
          );
          const data = await response.json();
          setTask(data);
        } catch (error) {
          setMessage("Erro ao carregar a tarefa.");
        }
      };

      fetchTask();
    }
  }, [query.id]);

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${query.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (response.ok) {
        setMessage("Tarefa atualizada com sucesso!");
        // Opcional: redirecionar de volta para a lista de tarefas após a atualização
        router.push("/gerenciamento/gerenciamentoTarefa");
      } else {
        setMessage("Erro ao salvar a tarefa.");
      }
    } catch (error) {
      setMessage("Erro ao conectar com a API.");
    }
  };

  if (!task) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.header}>Editar Tarefa</h1>
      {message && <div className={styles.alert}>{message}</div>}

      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label className={styles.label}>ID</label>
          <input
            type="text"
            className={styles.input}
            value={task.id}
            disabled
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Descrição</label>
          <input
            type="text"
            className={styles.input}
            value={task.descricao}
            onChange={(e) => setTask({ ...task, descricao: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Setor</label>
          <input
            type="text"
            className={styles.input}
            value={task.setor}
            onChange={(e) => setTask({ ...task, setor: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Prioridade</label>
          <input
            type="text"
            className={styles.input}
            value={task.prioridade}
            onChange={(e) => setTask({ ...task, prioridade: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Status</label>
          <input
            type="text"
            className={styles.input}
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
          />
        </div>

        <button className={styles.button} onClick={handleSave}>
          Salvar
        </button>
      </form>
    </div>
  );
}
