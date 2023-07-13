import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/categories", async (req, res) => {
  try {
    const gamesPromise = prisma.game.findMany();
    const principalCategoriesPromise = prisma.principalCategory.findMany({
      include: {
        subcategories: true,
      },
    });
    const subcategoriesPromise = prisma.subcategory.findMany();
    const sizePromise = prisma.size.findMany();
    const antiquityPromise = prisma.antiquity.findMany();

    // Ejecutar todas las consultas en paralelo
    const [games, principalCategories, subcategories, size, antiquity, brands] =
      await Promise.all([
        gamesPromise,
        principalCategoriesPromise,
        subcategoriesPromise,
        sizePromise,
        antiquityPromise,
        /* brandsPromise, */
      ]);

    res.status(200).json({
      message: "Success",
      games,
      principalCategories,
      subcategories,
      size,
      antiquity,
      brands,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
});

export default router;
