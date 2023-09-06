import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

/* const test = await prisma.Subcategory.findMany();

console.log(test); */

router.get("/categories", async (req, res) => {
  try {
    const gamesPromise = prisma.Game.findMany();
    const principalCategoriesPromise = prisma.principalCategory.findMany({
      include: {
        subcategories: true,
      },
    });
    const subcategoriesPromise = prisma.Subcategory.findMany();
    const sizePromise = prisma.Size.findMany();
    const antiquityPromise = prisma.Antiquity.findMany();

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
    console.log(error.message);
    res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
});

export default router;
