const express = require("express");
const app = express();

const PORT = 8080;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.send(`<h2>My app test run pipeline :D</h2>`);
});

app.listen(PORT, HOST, console.log(`Running`));
