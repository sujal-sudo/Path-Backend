import express from "express";  // ✅ Use import instead of require
import cors from "cors";
import bodyParser from "body-parser";
import sequelize from "./database/path_trekking.js";
import trekRoutes from "./routes/trekRoutes.js";  // ✅ Ensure correct import path

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
app.use("/api/treks", trekRoutes);

app.get("/", (req, res) => {
  res.send("Trek Management API is Running!");
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
