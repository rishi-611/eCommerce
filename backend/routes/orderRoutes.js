import express from "express";
import { check } from "express-validator";
import auth from "../middlewares/auth.js";

import { createOrder, getOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.route("/").post(auth, createOrder);

orderRouter.route("/:id").get(auth, getOrder);

export default orderRouter;
