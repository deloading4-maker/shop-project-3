const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://howlor:howlor123@cluster0.yelzxdr.mongodb.net/shop")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB error:", err);
  });