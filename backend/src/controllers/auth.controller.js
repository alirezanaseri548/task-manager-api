import { db } from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET = "resume_secret_key";

export const register = (req, res) => {
  const { email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);

  try {
    db.prepare(
      "INSERT INTO users (email, password) VALUES (?, ?)"
    ).run(email, hashed);

    res.status(201).json({ message: "User registered ?" });
  } catch {
    res.status(400).json({ error: "User already exists" });
  }
};

export const login = (req, res) => {
  const user = db.prepare(
    "SELECT * FROM users WHERE email = ?"
  ).get(req.body.email);

  if (!user || !bcrypt.compareSync(req.body.password, user.password))
    return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1d" });
  res.json({ token });
};

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
};
