import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Sample Task" },
  ]);
});

router.post("/", (req, res) => {
  res.json({
    id: 2,
    title: req.body.title,
  });
});

export default router;
