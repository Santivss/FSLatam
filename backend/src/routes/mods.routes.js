import { Router } from "express";
import { prisma } from "../db.js";
import express from "express";

const router = Router();

const allMods = await prisma.Mod.findMany();

const allImages = await prisma.Image.findMany();

console.log(allMods);
console.log(allImages);

router.get("/mods", async (req, res) => {
  try {
    const allMods = await prisma.mod.findMany();

    res.status(200).json({
      message: "Succes",
      allMods,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
