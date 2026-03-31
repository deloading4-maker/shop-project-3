const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// 🔥 ПОДКЛЮЧЕНИЕ К MONGODB (ТВОЁ)
mongoose.connect("mongodb+srv://howlor:howlor123@cluster0.yelzxdr.mongodb.net/shop?retryWrites=true&w=majority")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// тестовый роут
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// логин
app.post("/login", (req, res) => {
  const { login, password } = req.body;

  if (login === "admin" && password === "123") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

// порт
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

app.get("/login", (req, res) => {
  res.send("LOGIN ENDPOINT WORKS");
});

app.get("/test", (req, res) => {
  res.send("OK");
});