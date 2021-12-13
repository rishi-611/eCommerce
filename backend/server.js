import express from "express";
import chalk from "chalk";

import productsRoute from "./routes/productsRoute.js";
import userRouter from "./routes/userRouter.js";

import "./db/setupDB.js";
import { errorHandler, notFound } from "./middlewares/errorMiddlewars.js";

const PORT = process.env.PORT || 5000;

const app = express();

// middlewares and other setup
app.use(express.json());

// routes
app.use("/api/products", productsRoute);
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(chalk.yellow.bold("app running on port " + PORT));
});
