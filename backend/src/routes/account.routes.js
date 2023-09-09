import { Router } from "express";
import { prisma } from "../db.js";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/accountData/:userId", async (req, res) => {
  try {
    const userId = parseFloat(req.params.userId);
    const data = req.body;
    const messages = [];

    if (!data.name && !data.email && !data.actualPass && !data.newPass) {
      return res
        .status(400)
        .json({ message: "No se proporcionaron datos para actualizar" });
    }

    const userExist = await prisma.User.findFirst({
      where: {
        user_id: userId,
      },
    });

    if (!userExist) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (data.name && data.name !== userExist.user_name) {
      await updateUserName(userId, data.name, messages);
    }

    if (data.email && data.email !== userExist.email) {
      await updateUserEmail(userId, data.email, messages);
    }

    if (data.actualPass && data.newPass) {
      const passwordIsCorrect = await checkPassword(userId, data.actualPass);

      if (passwordIsCorrect) {
        await updatePassword(userId, data.newPass, messages);
      } else {
        return res
          .status(401)
          .json({ message: "Contraseña actual incorrecta" });
      }
    }

    return res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

async function updateUserName(userId, newName, messages) {
  await prisma.User.update({
    where: {
      user_id: userId,
    },
    data: {
      user_name: newName,
    },
  });
  messages.push("Nombre actualizado");
}

async function updateUserEmail(userId, newEmail, messages) {
  await prisma.User.update({
    where: {
      user_id: userId,
    },
    data: {
      email: newEmail,
    },
  });
  messages.push("Correo electrónico actualizado");
}

async function checkPassword(userId, actualPass) {
  const userExist = await prisma.User.findFirst({
    where: {
      user_id: userId,
    },
  });

  const hashedPasswordFromDatabase = userExist.password;
  const plainTextPassword = actualPass;

  return bcrypt.compare(plainTextPassword, hashedPasswordFromDatabase);
}

async function updatePassword(userId, newPass, messages) {
  const newHashedPassword = await bcrypt.hash(newPass, 10);

  await prisma.User.update({
    where: {
      user_id: userId,
    },
    data: {
      password: newHashedPassword,
    },
  });
  messages.push("Contraseña actualizada");
}

export default router;
