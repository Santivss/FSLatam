import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/user", async (req, res) => {
  try {
    const users = await prisma.User.findMany({});
    res.json(users);
  } catch (error) {
    res.send(500).json({
      messge: "Server error",
    });
  }
});

router.get("/user/:id", async (req, res) => {
  const user = await prisma.Usuario.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  return res.json(user);
});

router.post("/user", async (req, res) => {
  try {
    const newUser = await prisma.Usuario.create({
      data: req.body,
    });

    res.status(200).json({ message: "Operación exitosa" });
    /* console.log(req.body); */
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const data = req.body;
    const user = await prisma.Usuario.findFirst({
      where: {
        username: data.username,
      },
    });
    user
      ? res.status(200).json({
          user,
        })
      : res.status(200).json({
          message: "Usuario no encontrado",
        });
  } catch (error) {}
});

router.get("/userData/:id", async (req, res) => {
  const userId = parseFloat(req.params.id);

  const userExist = await prisma.User.findFirst({
    where: {
      user_id: userId,
    },
  });

  userExist
    ? res.status(200).json({
        message: `Succes`,
        userExist,
      })
    : res.status(404).json({
        message: `No se encontró ningun usuario con ese id`,
      });
});

export default router;
