import express from "express";
import { getTodos, createTodos, updateTodos } from "../controllers/todos.js";

const router = express.Router();

router.get("/", getTodos);
router.put("/", createTodos);
router.patch("/:id", updateTodos)

export default router;