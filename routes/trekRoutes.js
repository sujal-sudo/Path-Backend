import express from "express";
import { getTreks, getTrek, addTrek, updateTrek, deleteTrek } from "../controllers/trekController.js";

const router = express.Router();

// Define CRUD routes
router.get("/", getTreks);
router.get("/:id", getTrek);
router.post("/", addTrek);
router.put("/:id", updateTrek);
router.delete("/:id", deleteTrek);

export default router;
