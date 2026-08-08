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

🚀 Local Setup & InstallationTo run this project locally on your machine, follow these steps:PrerequisitesNode.js installed on your machine.A MongoDB Atlas account and cluster.1. Clone the repositoryBashgit clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name 2. Backend Setup (server)Bashcd server
npm install
Create a .env file in the root of the server directory and add your MongoDB Atlas connection string:Code snippet MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
PORT=3001
Start the backend server:Bashnpm start
(The server will run on http://localhost:3001)3. Frontend Setup (client)Open a new terminal window/tab:Bashcd client
npm install
Start the React development server:Bashnpm run dev
(The frontend will run on http://localhost:5173)📡 API EndpointsThe backend exposes the following REST API endpoints:MethodEndpointDescriptionGET/Fetches all user recordsGET/getUser/:idFetches a single user by their IDPOST/createUserCreates a new user recordPUT/updateUser/:idUpdates an existing user by IDDELETE/deleteUser/:idDeletes a user by ID📝 LicenseThis project is open-source and available under the MIT License.
