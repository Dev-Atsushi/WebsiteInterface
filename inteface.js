const express = require("express");
const app     = express();
const port    = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/pages/home.html");
});

app.get("/css/home", (req, res) => {
  req.sendFile(__dirname + "/src/css/home.css");
});

const listener = app.listen(port, () => {
  console.log(listener.address().port);
});
