const cron = require("./worker");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

cron();

app.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "data_ldlc.json"));
});

app.use(express.static("./build"));
app.get("*", (req, res) => {
  res.redirect("/");
});

const port = process.env.PORT || 5000;
app.listen(port);
