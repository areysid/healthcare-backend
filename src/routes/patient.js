import express from "express";
import {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient
} from "../controllers/patientController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes [Only Authenticated entities can perofrm]]
router.post("/", authMiddleware, createPatient);
router.get("/", authMiddleware, getPatients);
router.get("/:id", authMiddleware, getPatientById);
router.put("/:id", authMiddleware, updatePatient);
router.delete("/:id", authMiddleware, deletePatient);

export default router;
