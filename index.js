import express from "express";  // Use ES6 imports
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./Database/path_trekking.js"; // Use .js extension  // Ensure correct import path
import trekRoutes from "./routes/trekRoutes.js";       // Ensure correct import path
import authRoutes from "./routes/authRoutes.js";       // Import authentication routes
import dotenv from "dotenv";                            // Import dotenv for environment variables

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Sync models with database
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Database & tables synced"))
  .catch((err) => console.error("❌ Error syncing database:", err));

// Routes
app.use("/api/treks", trekRoutes);   // Trek routes
app.use("/api/auth", authRoutes);     // Authentication routes

app.get("/", (req, res) => {
  res.send("Trek Management API is Running!");
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});