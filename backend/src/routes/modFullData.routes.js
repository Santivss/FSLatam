import { Router } from "express";
import { prisma } from "../db.js";
import findImagesMod from "../utils/findImagesMod.js";

const router = Router();

router.get("/modFullData/:id", async (req, res) => {
  try {
    const id = parseFloat(req.params.id);

    const fullDataMod = await prisma.Mod.findFirst({
      where: {
        mod_id: id,
      },
    });

    if (fullDataMod) {
      const images = await findImagesMod(
        fullDataMod.user_name,
        fullDataMod.mod_id
      );

      res.json({ fullDataMod, images });
    } else {
      res.status(404).json({ message: "No se encontraron datos de mod." });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;
