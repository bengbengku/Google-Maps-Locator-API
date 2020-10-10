const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://bengbengku:1Ov3WY4fqOWoymum@cluster0.ulte2.mongodb.net/<dbname>?retryWrites=true&w=majority", { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

app.use(express.json({ limit: "50mb" }));

app.post("/api/stores", (req, res) => {
  let dbStores = req.body;
  console.log(dbStores);
  res.send("You have posted");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
