import { Router } from "express";
import sharp from "sharp";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = Router();

// Obtener la ruta del directorio actual utilizando el módulo "url" y "path"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.post("/createmod", async (req, res) => {
  const { imagesDataForPost } = req.body;

  try {
    // Array para almacenar las imágenes comprimidas
    const compressedImages = [];

    // Procesar cada imagen en el arreglo imagesDataForPost
    for (const imageData of imagesDataForPost) {
      // Decodificar la imagen base64 a Buffer

      const base64Data = imageData.data.replace(
        /^data:image\/(png|jpeg);base64,/,
        ""
      );
      const imageBuffer = Buffer.from(base64Data, "base64");

      // Redimensionar y comprimir la imagen utilizando Sharp
      let sharpInstance = sharp(imageBuffer);

      // Ajustar el formato adecuado en función del tipo de imagen
      if (imageData.type === "image/png") {
        sharpInstance = sharpInstance.png({ quality: 60 });
      } else if (imageData.type === "image/jpeg") {
        sharpInstance = sharpInstance.jpeg({ quality: 60 });
      } else {
        throw new Error("Unsupported image format: " + imageData.type);
      }

      const compressedImageBuffer = await sharpInstance
        .resize({ width: 640, height: 480 })
        .toBuffer();

      // Generar el nombre de archivo único para la imagen
      const uniqueFileName = generateUniqueFileName();

      // Guardar la imagen en el sistema de archivos
      fs.writeFileSync(uniqueFileName, compressedImageBuffer);

      // Agregar la imagen comprimida al array
      compressedImages.push({
        name: uniqueFileName,
        type: imageData.type,
      });
    }

    res.status(200).json({
      message: "Success",
      compressedImages,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Función para generar un nombre de archivo único (como se mencionó antes)
const generateUniqueFileName = () => {
  const uniqueID = uuidv4();
  const uploadDir = path.join(__dirname, "../../uploadImages");
  const uniqueFileName = `${uniqueID}.jpg`;
  return path.join(uploadDir, uniqueFileName);
};

export default router;
