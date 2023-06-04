import express, { json } from "express";

import modsRoutes from "./routes/mods.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(json());

app.use("/api", modsRoutes);

app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
