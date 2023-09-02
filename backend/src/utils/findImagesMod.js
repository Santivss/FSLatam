import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const findImagesMod = async (folderName, subFolderName) => {
  try {
    const currentURL = new URL(import.meta.url);
    const imagePath = new URL(
      `../../static/modImages/${folderName}/${subFolderName}`,
      currentURL
    );

    const mainDirectory = fileURLToPath(imagePath);

    const findImagesInDirectory = async (directory) => {
      const imageExtensions = [".jpg", ".jpeg", ".png"];
      const images = [];

      try {
        const files = await fs.readdir(directory);

        for (const file of files) {
          const filePath = path.join(directory, file);
          const fileStat = await fs.stat(filePath);

          if (fileStat.isDirectory()) {
            const subImages = await findImagesInDirectory(filePath);
            images.push(...subImages);
          } else {
            const fileExtension = path.extname(file).toLowerCase();
            if (imageExtensions.includes(fileExtension)) {
              // Leer el contenido de la imagen y convertirlo a Base64
              const fileContent = await fs.readFile(filePath, {
                encoding: "base64",
              });
              images.push({ name: file, content: fileContent });
            }
          }
        }
      } catch (error) {
        console.error("Error al buscar imágenes:", error);
      }

      return images;
    };

    const foundImages = await findImagesInDirectory(mainDirectory);

    console.log("Nombres de imágenes encontradas:");
    foundImages.forEach((image) => console.log(image.name));

    return foundImages;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};

export default findImagesMod;
