import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/categories", async (req, res) => {
  try {
    const categories = await prisma.principalCategory.findMany({});
    res.status(200).json({
      message: "This is",
      categories,
    });
  } catch (error) {}
});

export default router;
