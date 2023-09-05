import { fileURLToPath } from "url";
import { dirname } from "path";
import express, { json } from "express";
import cors from "cors";
import path from "path";

// Obtener la ruta del directorio actual utilizando el módulo "url" y "path"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const key = process.env.SECRET_KEY;

import createModRoutes from "./routes/createMod.routes.js";
import userRoutes from "./routes/user.routes.js";
import loginRoutes from "./routes/login.routes.js";
import registerRoutes from "./routes/register.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import modsRoutes from "./routes/mods.routes.js";
import modsUserRoutes from "./routes/modsUser.routes.js";
import topModdersAndUsersRoutes from "./routes/topModdersAndUsers.routes.js";
import modFullData from "./routes/modFullData.routes.js";

const app = express();

app.set("key", key);

app.use(cors());
app.use(json({ limit: "27mb" }));

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "static")));

app.use("/api", createModRoutes);
app.use("/api", userRoutes);
app.use("/api", loginRoutes);
app.use("/api", registerRoutes);
app.use("/api", categoriesRoutes);
app.use("/api", modsRoutes);
app.use("/api", modsUserRoutes);
app.use("/api", topModdersAndUsersRoutes);
app.use("/api", modFullData);

app.use((err, req, res, next) => {
  console.error("Error no manejado:", err);
  res.status(500).json({ error: "Ocurrió un error en el servidor" });
});

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
