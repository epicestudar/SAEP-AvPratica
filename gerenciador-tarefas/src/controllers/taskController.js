const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async createTask(req, res) {
    try {
      const { descricao, setor, prioridade, status, userId } = req.body;
      const task = await prisma.task.create({
        data: { descricao, setor, prioridade, status, userId },
      });
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar tarefa" });
    }
  },

  async getAllTasks(req, res) {
    try {
      const tasks = await prisma.task.findMany();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar tarefas" });
    }
  },

  async getTaskById(req, res) {
    try {
      const { id } = req.params;
      const task = await prisma.task.findUnique({
        where: { id: parseInt(id) },
      });
      if (!task)
        return res.status(404).json({ error: "Tarefa não encontrada" });
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter tarefa" });
    }
  },

  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { descricao, setor, prioridade, status, userId } = req.body;
      const task = await prisma.task.update({
        where: { id: parseInt(id) },
        data: { descricao, setor, prioridade, status, userId },
      });
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
  },

  async deleteTask(req, res) {
    try {
      const { id } = req.params;
      await prisma.task.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json({ message: "Tarefa excluída com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir tarefa" });
    }
  },
};
