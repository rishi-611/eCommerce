import express from "express";
import { check } from "express-validator";
import auth from "../middlewares/auth.js";

import { createOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.route("/").post(auth, createOrder);

export default orderRouter;
