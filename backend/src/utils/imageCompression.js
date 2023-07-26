import sharp from "sharp";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const imageCompression = async (
  imagesDataForPost,
  userFolderName,
  modFolderName
) => {
  try {
    // Obtener la ruta del directorio actual utilizando el módulo "url" y "path"
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Crear la ruta completa de la carpeta de destino usando el nombre proporcionado
    const uploadDir = path.join(
      __dirname,
      `../../static/modImages/${userFolderName}/${modFolderName}`
    );

    // Crear la carpeta si no existe
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Array para almacenar las imágenes comprimidas
    const compressedImages = [];

    // Procesar todas las imágenes en el arreglo imagesDataForPost
    for (let i = 0; i < imagesDataForPost.length; i++) {
      const imageData = imagesDataForPost[i];

      // Decodificar la imagen base64 a Buffer
      const base64Data = imageData.data.replace(
        /^data:image\/(png|jpeg);base64,/,
        ""
      );
      const imageBuffer = Buffer.from(base64Data, "base64");

      // Redimensionar y comprimir la imagen utilizando Sharp en una sola llamada
      let sharpInstance = sharp(imageBuffer)
        .resize({
          width: 1280,
          height: 720,
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .jpeg({ quality: 60 });

      const compressedImageBuffer = await sharpInstance.toBuffer();

      // Generar el nombre de archivo único para la imagen sin extensión
      const uniqueFileName = generateUniqueFileName();

      // Agregar la extensión original de la imagen al nombre de archivo único
      const fileNameWithExtension =
        uniqueFileName + getFileExtension(imageData.type);

      // Generar la ruta relativa completa de la imagen dentro del directorio de destino
      const relativeImagePath = path.join(
        userFolderName,
        modFolderName,
        fileNameWithExtension
      );

      // Guardar la imagen en el sistema de archivos dentro de la carpeta creada
      fs.writeFileSync(
        path.join(uploadDir, fileNameWithExtension),
        compressedImageBuffer
      );

      // Agregar la imagen comprimida al array
      compressedImages.push({
        name: fileNameWithExtension,
        path: relativeImagePath,
      });
    }

    // Comprimir solo la primera imagen y crear una copia con el prefijo "thumb_"
    if (compressedImages.length > 0) {
      const firstImageData = compressedImages[0];

      // Obtener el nombre de archivo sin la extensión y agregar el prefijo "thumb_"
      const thumbFileName = `thumb_${path.parse(firstImageData.name).name}`;

      // Obtener la extensión original de la imagen
      const fileExtension = path.parse(firstImageData.name).ext;

      // Generar el nombre de archivo para la copia de la primera imagen con el prefijo "thumb_"
      const thumbFileNameWithExtension = thumbFileName + fileExtension;

      // Obtener la imagen original de la primera imagen
      const originalImage = sharp(
        fs.readFileSync(path.join(uploadDir, firstImageData.name))
      );

      // Comprimir la copia de la primera imagen a una calidad menor
      const compressedThumbImageBuffer = await originalImage
        .resize({ width: 640, height: 360 }) // Redimensionar a 144p
        .jpeg({ quality: 40 }) // Ajustar la calidad para que pese menos
        .toBuffer();

      // Generar la ruta relativa completa de la copia de la primera imagen dentro del directorio de destino
      const thumbRelativePath = path.join(
        userFolderName,
        modFolderName,
        thumbFileNameWithExtension
      );

      // Guardar la copia de la primera imagen en el sistema de archivos dentro de la carpeta creada
      fs.writeFileSync(
        path.join(uploadDir, thumbFileNameWithExtension),
        compressedThumbImageBuffer
      );

      // Agregar la copia de la primera imagen comprimida al array
      compressedImages.push({
        name: thumbFileNameWithExtension,
        path: thumbRelativePath,
      });
    }

    // Función para generar un nombre de archivo único (como se mencionó antes)
    function generateUniqueFileName() {
      const uniqueID = uuidv4();
      return `${uniqueID}`;
    }

    // Función para obtener la extensión de archivo adecuada según el tipo de imagen
    function getFileExtension(imageType) {
      return imageType === "image/png" ? ".png" : ".jpg";
    }

    return compressedImages; // Devuelve el array de imágenes comprimidas
  } catch (error) {
    // Captura el error y devuélvelo como resultado
    return { error: error.message };
  }
};

export default imageCompression;
