const express = require("express");
const app = express();
const connectmongo = require("./router/connect");
const loginsignup = require("./router/loginSignuproute");
const employeesignup = require("./router/employeeroute");

const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// Connect MongoDB
connectmongo();

// Routes
app.use("/", loginsignup);

app.use("/",employeesignup)

app.use("/uploads", express.static("uploads"));


app.get("/get", (req, res) => {
  res.send("Welcome to Task Management API");
});

// Server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
