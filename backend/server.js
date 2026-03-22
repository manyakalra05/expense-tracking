require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// =====================
// Connect to Database
// =====================
if (process.env.MONGO_URI) {
  connectDB();
} else {
  console.log("Skipping DB connection (CI mode)");
}
// =====================
// Middleware
// =====================

// CORS (allow frontend)
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Parse JSON
app.use(express.json());

// =====================
// API Routes
// =====================
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// =====================
// Static Files (uploads only)
// =====================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =====================
// Health Check Route (IMPORTANT)
// =====================
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// =====================
// Server Start
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
