import { Router } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const data = req.body;
    const hashedPass = await bcrypt.hash(data.password, 10);

    // Aquí puedes guardar la contraseña en la base de datos, por ejemplo:
    const newUser = await prisma.users.create({
      data: {
        username: data.username,
        fullName: data.fullName,
        password: hashedPass, // Guardar la contraseña encriptada
        email: data.email,
        icon_profile: data.icon_profile,
        country: data.country,
        createdAt: new Date(),
      },
    });

    res.json("La cuenta se creó correctamente");
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
