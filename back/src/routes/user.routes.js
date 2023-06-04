import { Router } from "express";

import { prisma } from "../db.js";

const router = Router();

router.get("/user", async (req, res) => {
  const user = await prisma.user.findMany();

  res.json(user);
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
  const newUser = await prisma.user.create({
    data: req.body,
  });

  res.json(newUser);
});

export default router;
