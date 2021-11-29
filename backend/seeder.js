import users from "../data/users.js";
import products from "../data/products.js";
import User from "./db/models/User.js";
import Product from "./db/models/Product.js";
import chalk from "chalk";

import "./db/setupDB.js";

const deleteAllUsers = async () => {
  try {
    await User.deleteMany();
    // await Product.deleteMany();
    console.log(chalk.yellow("Deleted all existing users"));
  } catch (error) {
    console.log(chalk.red("Could not delete users from database"));
    console.log(chalk.red(error));
    procecss.exit(1);
  }
};

const insertUsers = async () => {
  try {
    await User.insertMany(users);
    console.log(chalk.green(`${users.length} users saved to database`));
    process.exit();
  } catch (error) {
    console.log(chalk.red("Could not save users to database"));
    console.log(chalk.red(error));
    process.exit(1);
  }
};

const deleteAllProducts = async () => {
  try {
    await Product.deleteMany();
    // await Product.deleteMany();
    console.log(chalk.yellow("Deleted all existing products from database"));
  } catch (error) {
    console.log(chalk.red("Could not delete products from database"));
    console.log(chalk.red(error));
    procecss.exit(1);
  }
};

const insertProducts = async () => {
  try {
    const admin = await User.findOne({ email: "rishi18454@gmail.com" });
    const adminId = admin._id;

    await Product.insertMany(
      products.map((product) => ({ ...product, user: adminId }))
    );
    console.log(chalk.green(`${products.length} products saved to database`));
    process.exit();
  } catch (error) {
    console.log(chalk.red("Could not save products to database"));
    console.log(chalk.red(error));
    process.exit(1);
  }
};

// if args are users, insert new users to db
// if args are users -d, delete existing users and add new to db
// for products -p, delete existing products and add new ones
// for products, insert new products

const args = process.argv.slice(2);

const seedData = async () => {
  if (args[0] == "--users") {
    if (args.length > 1 && args[1] == "-d") await deleteAllUsers();
    insertUsers();
  } else if (args[0] == "--products") {
    if (args.length > 1 && args[1] == "-d") await deleteAllProducts();
    insertProducts();
  }
};

seedData();
