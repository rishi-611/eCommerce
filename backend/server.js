const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api", (req, ress) => {
  ress.json({ hello: "hello" });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("app running on port " + PORT);
});
