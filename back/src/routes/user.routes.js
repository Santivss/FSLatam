import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();

router.get("/user", async (req, res) => {
  try {
    const user = await prisma.users.findMany();
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/user/:id", async (req, res) => {
  const user = await prisma.users.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });
  return res.json(user);
});

router.post("/user", async (req, res) => {
  try {
    const newUser = await prisma.users.create({
      data: req.body,
    });

    res.status(200).json({ message: "Operación exitosa" });
    /* console.log(req.body); */
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
});

export default router;
console.log("Los elentos que podemos ");
