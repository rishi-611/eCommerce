import express from "express";
import { check } from "express-validator";
import auth from "../middlewares/auth.js";

import {
  getUserDetails,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.route("/").post(
  [
    check("name", "You must provide a name").notEmpty(),
    check("email", "You must provide a valid email address").isEmail(),
    check("password", "Password should be atleast 6 characters long").isLength({
      min: 6,
    }),
  ],
  registerUser
);

userRouter.route("/login").post(loginUser);

userRouter.route("/me").get(auth, getUserDetails);

export default userRouter;
