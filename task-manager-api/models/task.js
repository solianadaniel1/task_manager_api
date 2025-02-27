const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link task to a user
}, { timestamps: true });

module.exports = mongoose.model("Task", TaskSchema);
