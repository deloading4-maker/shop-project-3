const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json()); // ОБЯЗАТЕЛЬНО

app.get("/", (req, res) => {
  res.send("API работает");
});

app.post("/login", (req, res) => {
  const { login, password } = req.body;

  if (login === "admin" && password === "123") {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

mongodb+srv://howlor:howlor123@cluster0.yelzxdr.mongodb.net/shop?retryWrites=true&w=majority