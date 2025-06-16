# 🍔 SnapBite - MERN Stack Food Ordering Platform

**SnapBite** is a full-stack food ordering application built with the **MERN stack** (MongoDB, Express, React, Node.js). It features a complete user experience with account management, food browsing, cart functionality, online order placement, and admin-level order/product management.

---

## 📌 Key Features

### 👤 User Panel
- Sign Up & Login with **email and password**
- Browse multiple food categories (e.g. snacks, meals, groceries)
- Add to Cart and manage cart items
- Place orders with payment option
- Track order status
- Cancel order (if not delivered)

### 🛠️ Admin Panel
- Login using email & password
- Add/edit/delete Item
- View all placed orders
- Update order status (e.g., Preparing → Out for Delivery → Delivered)

---

## 🧰 Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| **Frontend** | React (Vite) , CSS     |
| **Backend**  | Node.js, Express.js    |
| **Database** | MongoDB (Mongoose)     |
| **Auth**     | JWT + Bcrypt           |
| **API Tool** | Axios                  |
| **Routing**  | React Router DOM       |

---


## 🚀 Getting Started

## 1️⃣ Clone the Repository

- git clone https://github.com/your-username/SnapBite.git
- cd SnapBite



## 2️⃣ ### Backend Setup
- cd backend
- npm install
- cp .env.example .env  # Create .env with the values below
- npm run dev



## 3️⃣ Frontend (User Panel) Setup
- cd ../frontend
- npm install
- npm run dev


## 4️⃣ Admin Panel Setup
- cd ../admin
- npm install
- npm run dev



## Configuration backend/.env

- JWT_SECRET = your secret key
- STRIPE_SECRET_KEY = your stripe secret key 
- MONGO_URI = your mongo uri


## 👨‍💻 Developed By
### Avinash Jat
### Full Stack Developer – MERN Stack
- 📧 Email: dev.avinashjat.com
- 🌐 GitHub: github.com/Avinashjat
   
