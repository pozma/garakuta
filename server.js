const express = require("express");
const app = express();
const host = "127.0.0.1";
const port = 3000;

app.listen(port, host);
app.use("/garakuta", express.static(__dirname + "/"));
app.use("/garakuta", function(req, res) {
  res.status(404).sendFile(__dirname + "/404.html");
});

