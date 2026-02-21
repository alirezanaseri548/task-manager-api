import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  res.json({
    message: "User registered ✅",
    email,
  });
});

router.post("/login", (req, res) => {
  res.json({
    token: "FAKE_JWT_TOKEN_FOR_TEST",
  });
});

export default router;
