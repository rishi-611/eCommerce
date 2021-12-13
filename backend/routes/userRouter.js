import express from "express";
import { check } from "express-validator";

import { loginUser, registerUser } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.post(
  "/",
  [
    check("name", "You must provide a name").notEmpty(),
    check("email", "You must provide a valid email address").isEmail(),
    check("password", "Password should be atleast 6 characters long").isLength({
      min: 6,
    }),
  ],
  registerUser
);
userRouter.post("/login", loginUser);

export default userRouter;
