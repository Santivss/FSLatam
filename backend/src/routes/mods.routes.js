import { Router } from "express";
import { prisma } from "../db.js";
import fs from "fs";
import { fileURLToPath } from "url"; // Importar fileURLToPath desde el módulo url

const router = Router();

router.get("/mods", async (req, res) => {
  try {
    const maxRecords = 15;

    // Paso 1: Obtener los 10 registros de Mod
    const allMods = await prisma.Mod.findMany({
      take: maxRecords,
    });

    // Paso 2: Extraer los id de cada mod y almacenarlos en un arreglo
    const modIds = allMods.map((mod) => {
      return mod.mod_id;
    });

    // Paso 3: Buscar las imágenes correspondientes para cada mod
    const allImages = await prisma.image.findMany({
      where: {
        mod_id: {
          in: modIds, // Filtrar por los ids de los mods obtenidos anteriormente
        },
        image_link: {
          contains: "thumb_", // Filtrar por la cadena "thumb_" en el nombre de la imagen
        },
      },
    });

    // Paso 4: Crear un mapa con los ids de mod y sus imágenes correspondientes
    const imageMap = {};
    for (const image of allImages) {
      const currentURL = new URL(import.meta.url);
      const imagePath = new URL(
        "../../static/modImages/" + image.image_link,
        currentURL
      );
      const imagePathResolved = fileURLToPath(imagePath);
      const imageContent = fs.readFileSync(imagePathResolved, {
        encoding: "base64",
      });
      image.content = imageContent;
      imageMap[image.mod_id] = image;
    }

    // Paso 5: Agregar la propiedad "thumbnail" a cada objeto "mod" en el arreglo "allMods"
    for (const mod of allMods) {
      const thumbnailImage = imageMap[mod.mod_id];
      if (thumbnailImage) {
        mod.thumbnail = thumbnailImage.content;
      }
    }

    res.status(200).json({
      message: "Success",
      allMods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
