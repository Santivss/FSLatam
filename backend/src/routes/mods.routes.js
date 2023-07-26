import { Router } from "express";
import { prisma } from "../db.js";
import express from "express";
import fs from "fs";
import { fileURLToPath } from "url"; // Importar fileURLToPath desde el módulo url
import path from "path";

const router = Router();

router.get("/mods", async (req, res) => {
  try {
    const maxRecords = 10;

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

    // Leer el contenido de cada imagen y convertirlo a base64
    for (const image of allImages) {
      // Construir la URL del archivo a partir de la URL actual y la ruta relativa
      const currentURL = new URL(import.meta.url);
      const imagePath = new URL(
        "../../static/modImages/" + image.image_link,
        currentURL
      );

      // Convertir la URL a una ruta válida en el sistema de archivos
      const imagePathResolved = fileURLToPath(imagePath);

      const imageContent = fs.readFileSync(imagePathResolved, {
        encoding: "base64",
      });
      image.content = imageContent;
    }

    res.status(200).json({
      message: "Success",
      allMods,
      allImages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
