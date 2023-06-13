import { Router } from "express";
import { prisma } from "../db.js";
const router = Router();

router.get("/testUsers", async (req, res) => {
  console.log(req.body);
});

export default router;
