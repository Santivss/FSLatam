import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Obtener la ruta del directorio actual utilizando el módulo "url" y "path"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Función para generar un nombre de archivo único
const generateUniqueFileName = () => {
  const uniqueID = uuidv4();
  const uploadDir = path.join(__dirname, "../../uploadImages");
  const uniqueFileName = `${uniqueID}.jpg`;
  return path.join(uploadDir, uniqueFileName);
};

// Función para comprimir una imagen
export const compressImage = async (imageData) => {
  const base64Data = imageData.data.replace(
    /^data:image\/(png|jpeg);base64,/,
    ""
  );
  const imageBuffer = Buffer.from(base64Data, "base64");

  let sharpInstance = sharp(imageBuffer);

  if (imageData.type === "image/png") {
    sharpInstance = sharpInstance.png({ quality: 60 });
  } else if (imageData.type === "image/jpeg") {
    sharpInstance = sharpInstance.jpeg({ quality: 60 });
  } else {
    throw new Error("Unsupported image format: " + imageData.type);
  }

  return sharpInstance.resize({ width: 640, height: 480 }).toBuffer();
};
