import express from "express"
import { deleteTodos, getTodos,setTodos, updateTodo } from "../controllers/todos.controller.js"

const router = express.Router()

router.get("/", getTodos)
router.post("/", setTodos)
router.delete("/:id", deleteTodos)
router.post("/:id", updateTodo)

export default router