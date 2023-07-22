import sharp from "sharp";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const imageCompression = async (imagesDataForPost, folderName) => {
  try {
    // Obtener la ruta del directorio actual utilizando el módulo "url" y "path"
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Crear la ruta completa de la carpeta de destino usando el nombre proporcionado
    const uploadDir = path.join(
      __dirname,
      `../../static/modImages/${folderName}`
    );

    // Crear la carpeta si no existe
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Array para almacenar las imágenes comprimidas
    const compressedImages = [];

    // Procesar cada imagen en el arreglo imagesDataForPost
    for (let i = 0; i < imagesDataForPost.length; i++) {
      const imageData = imagesDataForPost[i];

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

      // Si es la primera imagen, aplicar características especiales
      if (i === 0) {
        sharpInstance = sharpInstance.resize({ width: 320, height: 130 });
        // Puedes agregar más modificaciones según tus necesidades para la primera imagen
      } else {
        // Para el resto de las imágenes, mantener las características anteriores
        sharpInstance = sharpInstance.resize({ width: 640, height: 360 });
        // Puedes agregar más modificaciones según tus necesidades para el resto de las imágenes
      }

      const compressedImageBuffer = await sharpInstance.toBuffer();

      // Generar el nombre de archivo único para la imagen
      let uniqueFileName = generateUniqueFileName();

      // Si es la primera imagen, agregar "thumb" al principio del nombre del archivo
      if (i === 0) {
        uniqueFileName = "thumb_" + uniqueFileName;
      }

      // Guardar la imagen en el sistema de archivos dentro de la carpeta creada
      fs.writeFileSync(
        path.join(uploadDir, uniqueFileName),
        compressedImageBuffer
      );

      // Agregar la imagen comprimida al array
      compressedImages.push({
        name: uniqueFileName,
        type: imageData.type,
      });
    }

    // Función para generar un nombre de archivo único (como se mencionó antes)
    function generateUniqueFileName() {
      const uniqueID = uuidv4();
      const uniqueFileName = `${uniqueID}.jpg`;
      return uniqueFileName;
    }

    return compressedImages; // Devuelve el array de imágenes comprimidas
  } catch (error) {
    // Captura el error y devuélvelo como resultado
    return { error: error.message };
  }
};

export default imageCompression;
