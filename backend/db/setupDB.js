import mongoose from "mongoose";
import chalk from "chalk";

const connectionURL = process.env.MONGO_URI;

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(chalk.blue("database connected")))
  .catch((err) => {
    console.log(chalk.red.bgWhite.bold("could not connect to database"));
    console.log(err);
  });
