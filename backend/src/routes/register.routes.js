import { Router } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../controllers/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const data = req.body;

    const userExist = await prisma.User.findFirst({
      where: {
        OR: [
          {
            user_name: data.user_name,
          },
          {
            email: data.email,
          },
        ],
      },
    });

    if (userExist) {
      if (userExist.user_name === data.user_name) {
        return res.status(200).json({
          message: "Este nombre de usuario no está disponible",
        });
      } else if (userExist.email === data.email) {
        return res.status(200).json({
          message: "Este email ya fue utilizado",
        });
      }
    }

    const hashedPass = await bcrypt.hash(data.password, 10);

    const newUser = await prisma.User.create({
      data: {
        fullname: data.fullname,
        user_name: data.user_name,
        password: hashedPass,
        email: data.email,
        createdAt: new Date(),
      },
    });

    if (newUser) {
      const payload = {
        userId: newUser.id,
        userName: data.user_name,
      };

      const token = generateToken(payload);

      return res.status(200).json({
        message: "La cuenta se creó correctamente",
        token,
      });
    }

    return res.status(500).json({
      message: "Error desconocido",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error al crear la cuenta",
    });
  }
});

export default router;
