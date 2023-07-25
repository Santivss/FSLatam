import { Router } from "express";
import imageCompression from "../utils/imageCompression.js";
import { prisma } from "../db.js";

const router = Router();

router.post("/createmod", async (req, res) => {
  try {
    const {
      categoriesDataForPost,
      descriptionDataForPost,
      imagesDataForPost,
      link,
      versionDataForPost,
      userId,
      userName,
    } = req.body;

    // Verificar si antiquity está definido o no
    const antiquityConnect = categoriesDataForPost.antiquitySelected
      ? { connect: { antiquity_id: categoriesDataForPost.antiquitySelected } }
      : undefined;

    const newMod = await prisma.Mod.create({
      data: {
        mod_title: versionDataForPost.title,
        mod_description: descriptionDataForPost,
        consoles: categoriesDataForPost.isConsoleEnabled,
        multiplayer: categoriesDataForPost.isMultiplayerEnabled,
        mod_link: link,
        principal_category: {
          connect: {
            principal_category_id: categoriesDataForPost.selectedCategory,
          },
        },
        subcategory: {
          connect: {
            subcategory_id: categoriesDataForPost.selectedSubcategory,
          },
        },
        antiquity: antiquityConnect,
        game: {
          connect: { game_id: categoriesDataForPost.selectedGame },
        },
        sizes: { connect: { size_id: categoriesDataForPost.sizeSelected } },
        user: {
          connect: { user_id: userId },
        },
      },
    });

    const userFolderName = userName;
    const modFolderName = String(newMod.mod_id);

    const relativeRoutesImagesComp = await imageCompression(
      imagesDataForPost,
      userFolderName,
      modFolderName
    );

    // Obtener el ID del Mod recién creado
    const newModId = newMod.mod_id;

    // Crear relaciones entre el Mod y las imágenes
    for (const image of relativeRoutesImagesComp) {
      const newImage = await prisma.Image.create({
        data: {
          image_link: image.path,
          mod: {
            connect: { mod_id: newModId },
          },
        },
      });
    }

    res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
