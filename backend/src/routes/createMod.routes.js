import { Router } from "express";
import imageCompression from "../utils/imageCompression.js";
import { prisma } from "../db.js";

const router = Router();

router.post("/createmod", async (req, res) => {
  try {
    const folderName = "rucking";

    const {
      categoriesDataForPost,
      descriptionDataForPost,
      imagesDataForPost,
      link,
      versionDataForPost,
      userId,
    } = req.body;

    const newMod = await prisma.Mod.create({
      data: {
        mod_title: versionDataForPost.title,
        mod_description: descriptionDataForPost,
        consoles: categoriesDataForPost.isConsoleEnabled,
        multiplayer: categoriesDataForPost.isMultiplayerEnabled,
        mod_link: link,
        subcategory: {
          connect: categoriesDataForPost.selectedSubcategory,
        },
        antiquity_id: categoriesDataForPost.antiquity_id,
        game: {
          connect: { game_id: categoriesDataForPost.selectedGame },
        },
        sizes: { connect: { size_id: categoriesDataForPost.sizeSelected } },
        user_id: userId,
        image_icon: "default/routes/for/image",
      },
    });

    /* imageCompression(imagesDataForPost, folderName); */
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
