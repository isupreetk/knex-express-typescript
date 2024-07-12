const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi from Express server");
});

app.listen("8080", () => {
  console.log("Localhost running at 8080");
});
