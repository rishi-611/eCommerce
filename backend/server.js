import express from "express";
import chalk from "chalk";

import "./db/setupDB.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api", (req, ress) => {
  ress.json({ hello: "hello" });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(chalk.yellow.bold("app running on port " + PORT));
});
