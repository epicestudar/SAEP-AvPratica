const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/", userController.createUser); // Criar usuário
router.get("/", userController.getAllUsers); // Listar todos os usuários
router.get("/:id", userController.getUserById); // Obter usuário por ID
router.put("/:id", userController.updateUser); // Atualizar usuário por ID
router.delete("/:id", userController.deleteUser); // Excluir usuário por ID

module.exports = router;
