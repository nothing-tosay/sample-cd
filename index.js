const express = require("express");
const app = express();

const PORT = 3000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.send(`<h2>My app</h2>`);
});

app.listen(3000, console.log("Listening at port 3000..."));
