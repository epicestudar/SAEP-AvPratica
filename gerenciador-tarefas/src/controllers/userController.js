const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async createUser(req, res) {
  try {
    const { nome, email } = req.body;

    // Verificar se os campos obrigatórios foram enviados
    if (!nome || !email) {
      return res.status(400).json({ error: "Nome e email são obrigatórios" });
    }

    // Criar o usuário
    const user = await prisma.user.create({ data: { nome, email } });
    res.status(201).json(user); // Retornar 201 para indicar que o usuário foi criado com sucesso
  } catch (error) {
    console.error("Erro ao criar usuário:", error); // Logar o erro completo para debug
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
},


  async getAllUsers(req, res) {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro ao listar usuários" });
    }
  },

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id) },
      });
      if (!user)
        return res.status(404).json({ error: "Usuário não encontrado" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao obter usuário" });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { nome, email },
      });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await prisma.user.delete({ where: { id: parseInt(id) } });
      res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  },
};
