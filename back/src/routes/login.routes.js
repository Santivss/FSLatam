import { Router } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../controllers/auth.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await prisma.users.findMany({
      where: {
        OR: [
          {
            username: username,
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

    const hashedPassword = user[0].password; // Suponiendo que la propiedad de la contraseña en la base de datos es 'password'

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
          userId: user[0].id,
          username: user[0].username,
        };

        const token = generateToken(payload);
        res.status(200).json({
          message: "La contraseña es correcta, se creó el token",
          token,
        });
      } else {
        res.status(200).json({
          messge: "La contraseña es incorrecta",
        });
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error en el servidor");
  }
});

export default router;
