import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Assign a doctor to a patient
export const assignDoctor = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body;

    // Prevent duplicate mapping
    const existing = await prisma.patientDoctorMapping.findUnique({
      where: { patientId_doctorId: { patientId, doctorId } },
    });

    if (existing) {
      return res.status(400).json({ error: "Doctor already assigned to this patient" });
    }

    const mapping = await prisma.patientDoctorMapping.create({
      data: { patientId, doctorId },
    });

    res.status(201).json(mapping);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get all mappings
export const getAllMappings = async (req, res) => {
  try {
    const mappings = await prisma.patientDoctorMapping.findMany({
      include: { patient: true, doctor: true },
    });
    res.json(mappings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get all doctors for a specific patient
export const getDoctorsForPatient = async (req, res) => {
  try {
    const { patientId } = req.params;

    const mappings = await prisma.patientDoctorMapping.findMany({
      where: { patientId: Number(patientId) },
      include: { doctor: true },
    });

    res.json(mappings.map(m => m.doctor));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Remove a doctor-patient mapping
export const removeMapping = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.patientDoctorMapping.delete({ where: { id: Number(id) } });

    res.json({ message: "Mapping removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
