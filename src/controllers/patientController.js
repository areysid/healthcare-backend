import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create patient
export const createPatient = async (req, res) => {
  try {
    const { name, age, disease } = req.body;
    const userId = req.user.userId; // from JWT

    const patient = await prisma.patient.create({
      data: { name, age, disease, createdBy: userId },
    });

    res.status(201).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get all patients created by this user
export const getPatients = async (req, res) => {
  try {
    const userId = req.user.userId;
    const patients = await prisma.patient.findMany({ where: { createdBy: userId } });
    res.json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get single patient by ID
export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const patient = await prisma.patient.findUnique({ where: { id: Number(id) } });
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Update patient
export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, disease } = req.body;

    const updatedPatient = await prisma.patient.update({
      where: { id: Number(id) },
      data: { name, age, disease },
    });

    res.json(updatedPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Delete patient
export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.patient.delete({ where: { id: Number(id) } });

    res.json({ message: "Patient deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
