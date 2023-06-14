import express, { json } from "express";
import cors from "cors";

import modsRoutes from "./routes/mods.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(json());

app.use("/mods", modsRoutes);
app.use("/users", userRoutes);

app.use(cors());

app.listen(3000, () => {
  console.log(`Server on port ${3000}`);
});
