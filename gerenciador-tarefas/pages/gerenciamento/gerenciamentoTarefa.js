"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../app/styles/taskManagement.module.css"; // Importação do CSS modular
import Header from "@/app/components/header";

export default function GerenciarTarefas() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Carregar todas as tarefas do backend
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setMessage("Erro ao carregar tarefas.");
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esta tarefa?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setTasks(tasks.filter((task) => task.id !== taskId)); // Remove a tarefa da lista
          setMessage("Tarefa excluída com sucesso!");
        } else {
          setMessage("Erro ao excluir tarefa.");
        }
      } catch (error) {
        setMessage("Erro ao conectar com a API.");
      }
    }
  };

  const handleEdit = (taskId) => {
    // Redireciona para a página de edição com o ID da tarefa
    router.push(`/gerenciamento/editarTarefa?id=${taskId}`);
  };

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.header}>Gerenciamento de Tarefas</h1>
      {message && <div className={styles.alert}>{message}</div>}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Setor</th>
            <th>Prioridade</th>
            <th>Status</th>
            <th>Usuário</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.descricao}</td>
              <td>{task.setor}</td>
              <td>{task.prioridade}</td>
              <td>{task.status}</td>
              <td>{task.userId}</td>
              <td>
                <button
                  className={`${styles.button} ${styles.editButton}`}
                  onClick={() => handleEdit(task.id)}
                >
                  Editar
                </button>
                <button
                  className={`${styles.button} ${styles.deleteButton}`}
                  onClick={() => handleDelete(task.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
