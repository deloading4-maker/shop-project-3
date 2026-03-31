console.log("SERVER STARTED");
app.get("/", (req, res) => {
  res.send("WORKS");
});
const express = require("express");
const app = express();

app.use(express.json());

// тест
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

app.get("*", (req, res) => {
  res.send("ROUTE NOT FOUND");
});