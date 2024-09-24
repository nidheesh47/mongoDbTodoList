const express = require("express");
const {
  createTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodoById,
} = require("../controller/todoController");
const validateTodo = require('../middleware/validateTodo')
const router = express.Router();

router.get("/todo", getAllTodo);
router.post("/todo", validateTodo, createTodo);
router.get("/todo/:id", getTodoById);
router.put("/todo/:id",validateTodo, updateTodo);
router.delete('/todo/:id', deleteTodoById)
module.exports = router;
