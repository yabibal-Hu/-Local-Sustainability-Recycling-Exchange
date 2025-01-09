# 🌿 Local Sustainability & Recycling Exchange API

Welcome to the **Local Sustainability & Recycling Exchange API**! This backend application powers a platform designed to promote sustainability by facilitating the exchange, giveaway, and recycling of items within local communities.

---

## 🚀 Features

- **User Authentication & Management**:

  - Register, login, and logout users.
  - Secure JWT-based authentication.
  - Profile management with image upload.

- **Item Management**:

  - CRUD operations for items (Create, Read, Update, Delete).
  - Image uploads for items.
  - Filter items by category, condition, and featured status.
  - Mark items as claimed.

- **Scalability & Security**:
  - Built with the MERN stack backend (MongoDB, Express.js, Node.js).
  - Secure API endpoints with middleware and input validation.

---

## 📂 Project Structure

server/ ├── config/ # Database and environment configurations ├── controllers/ # API route controllers ├── middleware/ # Authentication and error handling ├── models/ # Mongoose schemas ├── routes/ # API route definitions ├── uploads/ # Uploaded files (images) ├── .env # Environment variables (ignored in Git) ├── app.js # Main application entry point ├── README.md

# Project documentation

---

## ⚙️ Installation

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

````bash
git clone https://github.com/<your-username>/local-sustainability-recycling-api.git
cd local-sustainability-recycling-api/server
### 2️⃣ Install Dependenciesnpm install

### 3️⃣ Set Up Environment Variables
Create a .env file in the root directory and configure the following variables:
PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret

### 4️⃣ Start the Server
```bash
  npm start

````

he server will start on http://localhost:3500.
