const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "dist", "index.html");
  fs.sendfile(indexPath);
});

app.listen(5000, () => {
  console.log("Running on 5000port");
});
