import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { descricao, setor, prioridade, status, userId } = req.body;

    // Verificar se os campos estão preenchidos
    if (!descricao || !setor || !prioridade || !status || !userId) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    }

    try {
      // Criar a nova tarefa no banco de dados
      const newTask = await prisma.task.create({
        data: {
          descricao,
          setor,
          prioridade,
          status,
          userId: parseInt(userId), // Certifique-se de que userId é um número inteiro
        },
      });

      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: "Erro ao cadastrar tarefa." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido." });
  }
}
