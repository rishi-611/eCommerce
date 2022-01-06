import express from "express";
import { check } from "express-validator";
import auth from "../middlewares/auth.js";

import { createCODOrder, getOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.route("/COD").post(auth, createCODOrder);

orderRouter.route("/:id").get(auth, getOrder);

export default orderRouter;
