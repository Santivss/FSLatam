import { Router } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/images", (req, res) => {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const iconsDir = path.join(__dirname, "../../static/icons");

    const iconFiles = fs.readdirSync(iconsDir);

    res.status(200).json({
      message: "Succes",
      iconFiles,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
