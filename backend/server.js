require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const incomeRoutes = require("./routes/incomeRoutes")
const expenseRoutes = require("./routes/expenseRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")




const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

connectDB();

connectDB();

// Debug each route registration
console.log("Registering auth routes...");
app.use("/api/v1/auth", authRoutes);

console.log("Registering income routes...");
app.use("/api/v1/income", incomeRoutes);

console.log("Registering expense routes...");
app.use("/api/v1/expense", expenseRoutes);

console.log("Registering dashboard routes...");
app.use("/api/v1/dashboard", dashboardRoutes);

console.log("All routes registered successfully!");




// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


console.log(localStorage.getItem("token")); // should not be null

const path = require('path');

// Serve frontend (React) for all other routes
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
