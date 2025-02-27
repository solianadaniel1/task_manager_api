require("dotenv").config(); // This loads the .env file
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Import Routes
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", taskRoutes);
app.use("/api/auth", authRoutes);


// Connect to MongoDB using the MONGO_URI from the .env file
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
