const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router.post("/", taskController.createTask); // Criar tarefa
router.get("/", taskController.getAllTasks); // Listar todas as tarefas
router.get("/:id", taskController.getTaskById); // Obter tarefa por ID
router.put("/:id", taskController.updateTask); // Atualizar tarefa por ID
router.delete("/:id", taskController.deleteTask); // Excluir tarefa por ID

module.exports = router;
