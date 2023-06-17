import { Router } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcryptjs";

const router = Router();

router.get("/login", async (req, res) => {
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
      console.log("Usuario no encontrado");
      res.status(404).send("Usuario no encontrado");
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
        console.log("La contraseña es correcta");
        res.status(200).send("La contraseña es correcta");
      } else {
        // Las contraseñas no coinciden
        console.log("La contraseña es incorrecta");
        res.status(401).send("La contraseña es incorrecta");
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error en el servidor");
  }

  console.log(username, email, password);
});

export default router;
