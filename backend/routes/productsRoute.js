import express from "express";
import Product from "../db/models/Product.js";

const productsRoute = express.Router();

productsRoute.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: "Could not find any users",
      error: err,
    });
  }
});

export default productsRoute;
