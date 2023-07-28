import { Router } from "express";
import { prisma } from "../db.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const router = Router();

router.get("/modsUser/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);

    const modsUser = await prisma.Mod.findMany({
      where: { user_id: userId },
    });

    if (!modsUser) {
      return res.status(404).json({
        message: "Este usuario no tiene mods",
      });
    }

    // Obtener los ids de los mods del usuario
    const modIds = modsUser.map((mod) => mod.mod_id);

    // Paso 1: Buscar las imágenes correspondientes para cada mod
    const allImages = await prisma.image.findMany({
      where: {
        mod_id: {
          in: modIds, // Filtrar por los ids de los mods obtenidos anteriormente
        },
        NOT: {
          image_link: {
            startsWith: "thumb_", // Filtrar por las imágenes que no comiencen con "thumb_"
          },
        },
      },
    });

    // Paso 2: Crear un mapa con los ids de mod y sus imágenes correspondientes
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

    // Paso 3: Agregar la propiedad "thumbnail" a cada objeto "mod" en el arreglo "modsUser"
    for (const mod of modsUser) {
      const thumbnailImage = imageMap[mod.mod_id];
      if (thumbnailImage) {
        mod.thumbnail = thumbnailImage.content;
      }
    }

    res.status(200).json({
      message: "Success",
      modsUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/modsUser/:modId", async (req, res) => {
  try {
    const modId = parseInt(req.params.modId);

    // Paso 1: Obtener las imágenes asociadas al mod
    const imagesToDelete = await prisma.image.findMany({
      where: {
        mod_id: modId,
      },
    });

    // Eliminar las imágenes y las entradas de la base de datos
    for (const image of imagesToDelete) {
      const imageFolderPath = path.join(
        "../../static/modImages",
        image.image_link
      );

      // Verificar si el archivo existe antes de intentar eliminarlo
      if (fs.existsSync(imageFolderPath)) {
        try {
          fs.unlinkSync(path.join(imageFolderPath, image.image_link));
          console.log("Archivo eliminado:", image.image_link);
        } catch (error) {
          console.error(
            "Error al eliminar el archivo:",
            image.image_link,
            error
          );
        }
      } else {
        console.warn("El archivo no existe en la ruta:", imageFolderPath);
      }

      // Eliminar la entrada de la imagen de la base de datos
      await prisma.image.delete({
        where: {
          image_id: image.image_id,
        },
      });
    }

    // Paso 2: Eliminar las relaciones de uno a uno
    await prisma.mod.update({
      where: {
        mod_id: modId,
      },
      data: {
        sizes: {
          set: [], // Desconectar la relación en la tabla "sizes"
        },
        brands: {
          set: [], // Desconectar la relación en la tabla "brands"
        },
        subcategory: {
          // Desconectar la relación en la tabla "subcategory"
        },
        antiquity: {
          // Desconectar la relación en la tabla "antiquity"
        },
        game: {
          // Desconectar la relación en la tabla "game"
        },
        user: {
          // Desconectar la relación en la tabla "user"
        },
      },
    });

    // Paso 3: Finalmente, eliminar el mod de la tabla Mod
    await prisma.mod.delete({
      where: {
        mod_id: modId,
      },
    });

    res.status(200).json({
      message: "Mod and associated images deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occurred while deleting the mod",
    });
  }
});

export default router;
