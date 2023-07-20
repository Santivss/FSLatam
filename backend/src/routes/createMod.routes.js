import { Router } from "express";
import imageCompression from "../utils/imageCompression.js";

const router = Router();

router.post("/createmod", async (req, res) => {
  const {
    imagesDataForPost,
    versionDataForPost,
    descriptionDataForPost,
    categoriesDataForPost,
    link,
  } = req.body;

  try {
    imageCompression(imagesDataForPost);
    res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
