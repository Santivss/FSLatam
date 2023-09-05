import { Router } from "express";
import { prisma } from "../db.js";
import fs from "fs";
import { fileURLToPath } from "url"; // Importar fileURLToPath desde el módulo url
import filteredForModsRequest from "../utils/filteredForModsRequest.js";

const router = Router();

router.get("/mods", async (req, res) => {
  try {
    const maxRecords = 15;

    const subcategorySelected =
      parseFloat(req.query.subcategorySelected) || null;
    const antiquityAndSizeSelected = req.query.antiquityAndSizeSelected || null;
    const typesFiltered = req.query.typesFiltered || null;
    const fs19 = parseFloat(req.query.gameSelected.fs19) || null;
    const fs22 = parseFloat(req.query.gameSelected.fs22) || null;
    const categorySelected = parseFloat(req.query.categorySelected) || null;

    const whereClause = await filteredForModsRequest(
      subcategorySelected,
      antiquityAndSizeSelected,
      typesFiltered,
      fs19,
      fs22,
      categorySelected
    );

    const allMods = await prisma.Mod.findMany({
      where: whereClause,
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

    setTimeout(() => {
      allMods
        ? res.status(200).json({
            message: "Success",
            allMods,
          })
        : res.status(404).json({
            message: "Not found mods",
          });
    }, 500);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/modsCount", async (req, res) => {
  try {
    const principalCategories = await prisma.PrincipalCategory.findMany();
    const subcategories = await prisma.Subcategory.findMany();
    const modsData = await prisma.Mod.findMany();

    // Crear un objeto para mapear las categorías principales por principal_category_id
    const categoriesByPrincipalCategoryId = {};

    principalCategories.forEach((category) => {
      const principalCategoryId = category.principal_category_id;
      categoriesByPrincipalCategoryId[principalCategoryId] = {
        principal_category_id: principalCategoryId,
        principal_category_name: category.principal_category_name,
        modsWithId: 0,
        subcategories: [], // Agregar un arreglo para almacenar las subcategorías
      };
    });

    // Crear un objeto para mapear las subcategorías por subcategory_id
    const subcategoriesBySubcategoryId = {};

    subcategories.forEach((subcategory) => {
      const subcategoryId = subcategory.subcategory_id;
      subcategoriesBySubcategoryId[subcategoryId] = {
        subcategory_id: subcategoryId,
        subcategory_name: subcategory.subcategory_name,
        principal_category_id: subcategory.principal_category_id,
        modsWithId: 0,
      };

      // Agregar la subcategoría a la categoría principal correspondiente
      if (categoriesByPrincipalCategoryId[subcategory.principal_category_id]) {
        categoriesByPrincipalCategoryId[
          subcategory.principal_category_id
        ].subcategories.push(subcategoriesBySubcategoryId[subcategoryId]);
      }
    });

    // Iterar sobre los mods y contar los elementos correspondientes a cada categoría principal y subcategoría
    modsData.forEach((mod) => {
      const principalCategoryId = mod.principal_category_id;
      const subcategoryId = mod.subcategory_id;

      if (categoriesByPrincipalCategoryId[principalCategoryId]) {
        categoriesByPrincipalCategoryId[principalCategoryId].modsWithId++;
      }

      if (subcategoriesBySubcategoryId[subcategoryId]) {
        subcategoriesBySubcategoryId[subcategoryId].modsWithId++;
      }
    });

    const response = {
      categoriesByPrincipalCategoryId: Object.values(
        categoriesByPrincipalCategoryId
      ),
    };

    res.status(200).json({
      message: "Succes",
      response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
