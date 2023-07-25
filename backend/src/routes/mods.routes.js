import { Router } from "express";
import { prisma } from "prisma";

const router = Router();

router.get("/mods", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
