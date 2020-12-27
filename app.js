const cron = require("./worker");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

cron();

app.get("/3080", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "3080.json"));
});

app.get("/3090", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "3090.json"));
});

app.use("/", express.static(path.join(__dirname + "/build")));
app.get("*", (req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 5000;
app.listen(port);
