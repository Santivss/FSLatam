import { Router } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../controllers/auth.js";

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await prisma.User.findMany({
      where: {
        OR: [
          {
            user_name: username,
          },
          {
            email: email,
          },
        ],
      },
    });

    if (user.length === 0) {
      // Usuario no encontrado
      res.status(200).json({
        message: "Usuario no encontrado",
      });
      return;
    }

    const hashedPassword = user[0].password;

    bcrypt.compare(password, hashedPassword, (err, result) => {
      if (err) {
        // Error al comparar las contraseñas
        console.error(err);
        res.status(500).send("Error al comparar las contraseñas");
        return;
      }

      if (result) {
        // Las contraseñas coinciden
        const payload = {
          userId: user[0].user_id,
          userName: user[0].user_name,
          userIcon: user[0].user_icon,
        };

        const token = generateToken(payload);
        res.status(200).json({
          message: "Los datos se validaron correctamente",
          token,
        });
      } else {
        res.status(200).json({
          message: "La contraseña es incorrecta",
        });
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error en el servidor");
  }
});

export default router;
