import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a new doctor
export const createDoctor = async (req, res) => {
  try {
    const { name, specialty } = req.body;

    const doctor = await prisma.doctor.create({
      data: { name, specialty },
    });

    res.status(201).json(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get all doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany();
    res.json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get single doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await prisma.doctor.findUnique({ where: { id: Number(id) } });
    if (!doctor) return res.status(404).json({ error: "Doctor not found" });
    res.json(doctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Update doctor
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, specialty } = req.body;

    const updatedDoctor = await prisma.doctor.update({
      where: { id: Number(id) },
      data: { name, specialty },
    });

    res.json(updatedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Delete doctor
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.doctor.delete({ where: { id: Number(id) } });

    res.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

