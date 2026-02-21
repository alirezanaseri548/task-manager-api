
Task Manager API (SQL + Auth)
 که برای استفاده در رزومه و تمرینExpress  وNode.js  حرفهای باBackend یک پروژه طراحی شده است.Backend مفاهیم
 امکانات پروژه
Express.js  باRESTful API 
JWT (Login / Register) ( باAuth) احراز هویت(Create / Get) مدیریت تسکها
Error Handling های امنیتی وMiddleware ENV (dev / prod) پشتیبانی از
GitHub Actions  باCI/CD
ساختار استاندارد و تمیز پروژه	 •
 •
 •
 •
 •
 •
 •
 ساختار پروژه
/backend

/src ──├ 

/routes ──├   │ 

auth.routes.js ──├   │   │ 

task.routes.js ──└   │   │ 

/middleware ──├   │ 

/config ──├   │ 

index.js ──└   │ 

package.json ──├ 

env. ──└ 

/frontend











 

 اجرای پروژه به صورت لوکال
cd backend

npm install

	npm run dev
: اجرا میشود	 سرور روی پورت5000

http://localhost:5000

API Endpoints 
Auth
api/auth/register/	 POST	 •
api/auth/login/		 •
	 POST	
Tasks
api/tasks/
	 GET	 •
 •
api/tasks/	 POST	
PowerShell  تست سریع با
":"test@test.com","password":"123456"}' -ContentType "application/json

			 هدف پروژه آمادهسازی-  استانداردAPI  وAuth  پیادهسازی- Backend  تقویت مهارت- :این پروژه با هدف		برای استفاده در رزومه	توسعه داده شده است.
 

 نکات رزومهای
Node.js / Express 
REST API Design 
Authentication & Authorization 
Clean Architecture 
CI/CD	 •
 •
 •
 •
 •
 وضعیت پروژه
	 قابل استفاده در رزومه
Author 
Your Name
