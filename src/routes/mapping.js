import express from "express";
import {
  assignDoctor,
  getAllMappings,
  getDoctorsForPatient,
  removeMapping
} from "../controllers/mappingController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes protected
router.use(authMiddleware);

router.post("/", assignDoctor); // Assign doctor to patient
router.get("/", getAllMappings); // Get all mappings
router.get("/:patientId", getDoctorsForPatient); // Get all doctors for a patient
router.delete("/:id", removeMapping); // Remove mapping by mapping ID

export default router;
