const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors"); // Importe o pacote CORS
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Habilita CORS para todas as origens
app.use(express.json()); // Middleware para JSON
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
