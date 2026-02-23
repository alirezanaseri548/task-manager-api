
# ✅ Task Manager API (SQL + Auth)

یک پروژه **Backend رزومه‌ای** با Node.js و Express  
پیاده‌سازی RESTful API با احراز هویت، JWT و مدیریت تسک‌ها  
مناسب برای Portfolio و Technical Interview

---

## ✨ Features
- RESTful API با Express.js
- Authentication (Register / Login)
- JWT (Token-based Authentication)
- Task Management (Create / Get)
- Middleware-based Architecture
- Environment Config (dev / prod)
- CI/CD Ready Structure
- Frontend-ready API

--

## 🧱 Tech Stack
- Node.js
- Express.js
- ES Modules
- JWT
- MongoDB / SQL-ready Architecture
- Nodemon

---

## 📁 Project Structure

```
backend/
 ├── src/
 │   ├── routes/
 │   │   ├── auth.routes.js
 │   │   └── task.routes.js
 │   ├── controllers/
 │   ├── middleware/
 │   ├── config/
 │   │   └── db.js
 │   └── index.js
 ├── package.json
 └── .env.example
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run project (development)
```bash
npm run dev
```

Server will start on:
```
http://localhost:5000
```

---

## 🔗 API Endpoints

### ✅ Health Check
```
GET /
```

### 🔐 Auth
```
POST /api/auth/register
POST /api/auth/login
```

### ✅ Tasks (Protected)
```
GET  /api/tasks
POST /api/tasks
```

---

## 🧪 Example Test (PowerShell)

```powershell
Invoke-RestMethod http://localhost:5000/api/auth/login `
-Method POST `
-Body '{"email":"test@test.com","password":"123456"}' `
-ContentType "application/json"
```

---

## 📌 Status
✅ Project completed  
✅ Ready for GitHub & Resume  
✅ Clean architecture & scalable structure

---

**Author:** Alireza Naseri
Built with ❤️ using Node.js & Express
```

---

## ✅ چرا این یکی قشنگه؟
- ✅ Headings درست
- ✅ Code block واقعی
- ✅ فاصله‌گذاری GitHub‑friendly
- ✅ نه شلوغ، نه بچگانه
- ✅ Recruiter وقتی باز می‌کنه، حال می‌کنه 😎

---

## ✅ فقط این کار رو بکن

```bash
git add README.md
git commit -m "docs: improve README formatting"
git push origin main
```

---
