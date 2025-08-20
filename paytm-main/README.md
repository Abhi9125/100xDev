
## Build a basic version of PayTM
# 💸 Money Transfer App

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register, log in, and securely transfer money to other users. The system includes authentication, account balance management, and transaction tracking — all implemented using modern web technologies.

---

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **Utilities:** CORS, Body-parser

---

## ✨ Features

### ✅ User Authentication
- User signup & signin
- JWT-based auth
- Auth middleware to protect routes

### 🏦 Banking System
- Mongoose schemas for user and bank data
- Transaction history stored in database
- Balance initialized on signup
- Transfer money to another user
- Balance inquiry endpoint

### 🎨 Frontend
- Fully functional UI with routing
- Signup, Signin, and Dashboard pages
- Auth components for secure navigation

---

## 📁 Project Workflow

### 🔧 Backend Development Steps
1. Create user Mongoose schema
2. Define routing structure
3. Route user requests (Express)
4. Add `cors`, `body-parser`, and `jsonwebtoken`
5. Implement auth routes for backend
6. Create middleware to verify JWT tokens
7. Set up protected user routes
8. Create bank-related schema
9. Manage transactions in the DB
10. Initialize account balance on signup
11. Create router for accounts
12. Implement `/balance` and `/transfer` endpoints
13. Final testing & solution checkpoint

### 🎨 Frontend Development Steps
1. Add routing to React app using `react-router-dom`
2. Create and integrate the Signup page
3. Create the Signin page
4. Build the Dashboard page
5. Create reusable Auth components

---

## 🚀 Getting Started

### 📥 Clone the repository

```bash
git clone https://github.com/Abhi9125/100xDev/tree/main/paytm-main
```
## ScreenShot 
<img width="1366" height="768" alt="HomePage" src="https://github.com/user-attachments/assets/992885cc-8878-4ee2-9ddb-e67340bcd504" />
<img width="1366" height="768" alt="Signup" src="https://github.com/user-attachments/assets/ee5c1fc9-d743-4adb-ba31-a4661267fd7a" />
<img width="1366" height="768" alt="SignIn" src="https://github.com/user-attachments/assets/393e3a34-d42f-440f-9515-dc36061937f7" />
<img width="1366" height="768" alt="Dashboard" src="https://github.com/user-attachments/assets/3642f7b4-c81e-4456-a378-fc26328c9cf8" />
<img width="1366" height="768" alt="Transfermoney" src="https://github.com/user-attachments/assets/233e8cc7-bcee-4222-b04f-ebfbc3621591" />



