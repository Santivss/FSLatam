import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

// GET all users
router.get("/user", async (req, res) => {
  try {
    const users = await prisma.User.findMany({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// GET user by ID
router.get("/user/:id", async (req, res) => {
  try {
    const user = await prisma.Usuario.findFirst({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST create a new user
router.post("/user", async (req, res) => {
  try {
    const newUser = await prisma.Usuario.create({
      data: req.body,
    });
    res.status(200).json({ message: "Operación exitosa" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
});

// POST find user by username
router.post("/users", async (req, res) => {
  try {
    const data = req.body;
    const user = await prisma.Usuario.findFirst({
      where: {
        username: data.username,
      },
    });

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(200).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
});

// GET user data by ID
router.get("/userData/:id", async (req, res) => {
  const userId = parseFloat(req.params.id);

  try {
    const userExist = await prisma.User.findFirst({
      where: {
        user_id: userId,
      },
    });

    if (userExist) {
      res.status(200).json({ message: "Succes", userExist });
    } else {
      res
        .status(404)
        .json({ message: "No se encontró ningún usuario con ese ID" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
});

export default router;
