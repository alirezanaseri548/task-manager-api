import express from "express";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import { securityMiddleware } from "./middleware/security.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

securityMiddleware(app);

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Task Manager API (SQL + Auth) ✅" });
});

app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
