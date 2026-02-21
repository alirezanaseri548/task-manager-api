import { db } from "../config/db.js";

export const getTasks = (req, res) => {
  const tasks = db.prepare(
    "SELECT * FROM tasks WHERE user_id = ?"
  ).all(req.user.id);
  res.json(tasks);
};

export const createTask = (req, res) => {
  const result = db.prepare(
    "INSERT INTO tasks (title, user_id) VALUES (?, ?)"
  ).run(req.body.title, req.user.id);

  res.status(201).json({ id: result.lastInsertRowid });
};
