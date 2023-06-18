import express, { json } from "express";
import cors from "cors";

import { key } from "./settings/keys.js";

import modsRoutes from "./routes/mods.routes.js";
import userRoutes from "./routes/user.routes.js";
import loginRoutes from "./routes/login.routes.js";
import registerRoutes from "./routes/register.routes.js";

const app = express();

app.set("key", key.key);

app.use(cors());
app.use(json());

app.use("/api", modsRoutes);
app.use("/api", userRoutes);
app.use("/api", loginRoutes);
app.use("/api", registerRoutes);

app.use((err, req, res, next) => {
  console.error("Error de CORS:", err);
  res.status(500).send("Error de CORS");
});

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
