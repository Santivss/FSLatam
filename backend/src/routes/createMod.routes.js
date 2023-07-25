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
        antiquity: {
          connect: { antiquity_id: categoriesDataForPost.antiquitySelected },
        },
        game: {
          connect: { game_id: categoriesDataForPost.selectedGame },
        },
        sizes: { connect: { size_id: categoriesDataForPost.sizeSelected } },
        user: {
          connect: { user_id: userId },
        },
      },
    });

    const folderName = userName;

    imageCompression(imagesDataForPost, folderName);
    res.status(200).json({
      message: "Success",
      newMod,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
