import express from "express";
import {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
} from "../controllers/doctorController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes [Only Authenticated entities can perofrm]
router.post("/", authMiddleware, createDoctor);
router.put("/:id", authMiddleware, updateDoctor);
router.delete("/:id", authMiddleware, deleteDoctor);

// Public routes [anyone can view given that they are logged in]
router.get("/", authMiddleware, getDoctors);
router.get("/:id", authMiddleware, getDoctorById);

export default router;
