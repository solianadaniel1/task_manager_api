const express = require("express");
const { createTask, getTasks, getTask, updateTask, deleteTask } = require("../controllers/taskController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Ensure that `createTask` is actually a function, not an object
router.post("/tasks", authMiddleware, createTask);
router.get("/tasks", authMiddleware, getTasks);
router.get("/tasks/:id", authMiddleware, getTask);
router.put("/tasks/:id", authMiddleware, updateTask);
router.delete("/tasks/:id", authMiddleware, deleteTask);

module.exports = router;
