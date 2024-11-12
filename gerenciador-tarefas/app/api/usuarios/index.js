import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, email } = req.body;

    // Verificar se os campos estão preenchidos
    if (!nome || !email) {
      return res
        .status(400)
        .json({ message: "Nome e email são obrigatórios." });
    }

    try {
      // Criar o novo usuário no banco de dados
      const newUser = await prisma.usuario.create({
        data: {
          nome,
          email,
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Erro ao cadastrar usuário." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido." });
  }
}
