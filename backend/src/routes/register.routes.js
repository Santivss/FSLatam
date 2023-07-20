import { Router } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../controllers/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const data = req.body;

    const userExist = await prisma.users.findFirst({
      where: {
        OR: [
          {
            username: data.username,
          },
          {
            email: data.email,
          },
        ],
      },
    });

    if (userExist) {
      return res.status(200).json({
        message: "Este usuario ya existe",
      });
    }

    const hashedPass = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.users.create({
      data: {
        fullname: data.fullname,
        username: data.username,
        password: hashedPass,
        email: data.email,
        createdAt: new Date(),
      },
    });

    if (newUser) {
      const payload = {
        userId: newUser.id,
      };

      const token = generateToken(payload);

      return res.status(200).json({
        message: "La cuenta se creó correctamente",
        token,
      });
    }

    return res.status(500).json({
      message: "Error al crear la cuenta",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al crear la cuenta",
    });
  }
});

export default router;
