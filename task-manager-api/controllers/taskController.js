const Task = require("../models/Task");

// Create a task
exports.createTask = async (req, res) => {
    try {
        const task = new Task({
            ...req.body,
            user: req.user.id, // Assign task to the logged-in user
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id }); // Fetch tasks for the logged-in user
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single task
exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        // Ensure the task belongs to the logged-in user
        if (task.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Access denied" });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Update a task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Ensure the task belongs to the logged-in user
        if (task.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Access denied" });
        }

        // Update the task
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Ensure the task belongs to the logged-in user
        if (task.user.toString() !== req.user.id) {
            return res.status(403).json({ message: "Access denied" });
        }
        // Delete the task
        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
