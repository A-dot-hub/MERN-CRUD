const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

// Load environment variables for local testing (Requires 'npm install dotenv')
require("dotenv").config();

const app = express();

// Configure CORS to allow requests from any origin during deployment
// Replace your current app.use(cors(...)) with this:

app.use(
  cors({
    origin: "https://mern-crud-lake.vercel.app", // Strictly allows your Vercel front-end
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json()); // Parses incoming JSON data

// Connect to MongoDB Atlas using the Environment Variable
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas successfully!"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// 1. Get all users
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// 2. Get a specific user by ID
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// 3. Update a user by ID
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// 4. Delete a user by ID
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// 5. Create a new user
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Local testing port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// EXPORT THE APP FOR VERCEL
module.exports = app;
