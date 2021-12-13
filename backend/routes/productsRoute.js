import express from "express";
import {
  getAllProducts,
  getProduct,
} from "../controllers/productControllers.js";

const productsRoute = express.Router();

productsRoute.get("/", getAllProducts);

productsRoute.get("/:id", getProduct);

export default productsRoute;
