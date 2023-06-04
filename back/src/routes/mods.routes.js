import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/mods", async (req, res) => {
  const mods = await prisma.mods.findMany();

  res.json(mods);
});

router.post("/mods", async (req, res) => {
  const newMod = await prisma.mods.create({
    data: req.body,
  });
  res.json(newMod);
});

export default router;
