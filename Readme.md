# 🚀 MERN Stack CRUD Application

A full-stack Web Application built using the **MERN** (MongoDB, Express.js, React.js, Node.js) architecture. This project demonstrates how to perform fundamental CRUD (Create, Read, Update, Delete) operations with a RESTful API and a responsive React frontend.

## 🔗 Live Demo

- **Frontend Application:** [https://mern-crud-lake.vercel.app](https://mern-crud-lake.vercel.app)
- **Backend API:** [https://mern-crud-xyz.vercel.app](https://mern-crud-xyz.vercel.app)

---

## ✨ Features

- **Create:** Add new users to the database with their Name, Email, and Age.
- **Read:** Fetch and display a list of all users from the database in real-time.
- **Update:** Edit existing user information seamlessly.
- **Delete:** Remove users from the database.
- **Responsive UI:** Styled cleanly using Bootstrap.
- **Cloud Database:** Integrated with MongoDB Atlas for scalable data storage.
- **Deployed:** Fully deployed and hosted on Vercel.

---

## 🛠️ Technology Stack

**Frontend (Client)**

- React.js (Vite)
- React Router DOM (Routing)
- Axios (HTTP Requests)
- Bootstrap (Styling)

**Backend (Server)**

- Node.js
- Express.js (REST API Framework)
- Mongoose (Object Data Modeling for MongoDB)
- CORS (Cross-Origin Resource Sharing)

**Database & Deployment**

- MongoDB Atlas (Cloud Database)
- Vercel (Frontend & Backend Hosting)

---

## 📂 Project Structure

The repository is divided into two main directories:

```text
├── client/          # React Frontend
│   ├── src/
│   │   ├── App.jsx          # Main routing component
│   │   ├── Users.jsx        # Read and Delete operations
│   │   ├── CreateUser.jsx   # Create operation
│   │   └── UpdateUser.jsx   # Update operation
│   └── package.json
│
└── server/          # Node.js/Express Backend
    ├── models/
    │   └── Users.js         # Mongoose User Schema
    ├── index.js             # API routes and server config
    ├── vercel.json          # Vercel deployment configuration
    └── package.json
```

# 🚀 Local Setup & Installation

To run this project locally on your machine, follow these steps.

## Prerequisites

Make sure you have the following installed:

- **Node.js**
- **MongoDB** (local MongoDB installation or MongoDB Atlas)

---

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

## 2. Backend Setup

Navigate to the `server` directory:

```bash
cd server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the `server` directory:

```text
server/
├── .env
├── index.js
├── models/
├── package.json
└── ...
```

Add your MongoDB connection string and port:

```env
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority"
PORT=3001
```

> **Important:** Never commit your `.env` file to GitHub. Add `.env` to your `.gitignore`.

### Start the Backend Server

```bash
npm start
```

The backend server will run at:

```text
http://localhost:3001
```

---

## 3. Frontend Setup

Open a **new terminal window** and navigate to the `client` directory:

```bash
cd client
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint          | Description                    |
| ------ | ----------------- | ------------------------------ |
| GET    | `/`               | Fetches all user records       |
| GET    | `/getUser/:id`    | Fetches a single user by ID    |
| POST   | `/createUser`     | Creates a new user record      |
| PUT    | `/updateUser/:id` | Updates an existing user by ID |
| DELETE | `/deleteUser/:id` | Deletes a user by ID           |

---

```text
MernCrud/
├── client/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── models/
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Development Tools

- Git & GitHub
- Nodemon
- MongoDB Atlas / MongoDB

---

## 📝 License

This project is open-source and available under the **MIT License**.
