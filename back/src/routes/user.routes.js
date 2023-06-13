import { Router } from "express";

import { prisma } from "../db.js";

const router = Router();

router.get("/user", async (req, res) => {
  try {
    const user = await prisma.Users.findMany();
    console.log(user);
    res.json(user);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/user/:id", async (req, res) => {
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(req.params.id),
    },
  });

  return res.json(user);
});

router.post("/user", async (req, res) => {
  try {
    const newUser = await prisma.Users.create({
      data: req.body,
    });
    console.log(req.body);
    res.json(newUser);
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
