import { Router } from "express";

const router = Router();

router.get("/active", (req, res) => {
  res.json({
    message: "Active",
  });
});

export default router;
