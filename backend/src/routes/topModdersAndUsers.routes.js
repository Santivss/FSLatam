import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/topModdersAndUsers", async (req, res) => {
  try {
    async function getUsersWithModsLastNDays(days) {
      const today = new Date();
      const lastNDays = new Date(today);
      lastNDays.setDate(today.getDate() - days);

      const lastUsersUploaded = await prisma.User.findMany({
        take: 10,
        include: {
          mods: {
            where: {
              createdAt: {
                gte: lastNDays, // Filtrar por mods creados en los últimos N días
              },
            },
          },
        },
      });

      // Procesar los resultados para obtener la estructura deseada
      const userModsCount = lastUsersUploaded.map((user) => {
        let totalDownloads = 0;
        for (const mod of user.mods) {
          totalDownloads += mod.downloadsCount;
        }

        return {
          user_name: user.user_name,
          modsCount: user.mods.length,
          totalDownloads: totalDownloads,
        };
      });

      return userModsCount;
    }

    async function getModsLastNDays(days) {
      const today = new Date();
      const lastNDays = new Date(today);
      lastNDays.setDate(today.getDate() - days);

      const lastUsersUploaded = await prisma.Mod.findMany({
        take: 10,
      });

      // Obtener los 10 mods con la propiedad downloadsCount más alta
      lastUsersUploaded.sort(
        (modA, modB) => modB.downloadsCount - modA.downloadsCount
      );

      const top10Mods = lastUsersUploaded.slice(0, 10);

      // Obtener la información del usuario para cada mod
      const modsWithUserInfo = await Promise.all(
        top10Mods.map(async (mod) => {
          const user = await prisma.User.findUnique({
            where: { user_id: mod.user_id },
          });

          return {
            mod_title: mod.mod_title,
            downloadsCount: mod.downloadsCount,
            user_name: user.user_name,
            user_id: user.user_id,
            mod_id: mod.mod_id,
          };
        })
      );

      return modsWithUserInfo;
    }

    // Filtrar por los últimos 30 días
    const last30DaysUsers = await getUsersWithModsLastNDays(30);
    const last30DaysMods = await getModsLastNDays(30);

    res.status(200).json({
      message: "Success",
      last30DaysUsers: last30DaysUsers,
      last30DaysMods: last30DaysMods,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
