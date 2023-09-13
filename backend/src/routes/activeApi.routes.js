import { Router } from "express";
import { prisma } from "../db";

const router = Router();

router.get("/active", (req, res) => {
  res.json({
    message: "Active",
  });
});

export default router;
