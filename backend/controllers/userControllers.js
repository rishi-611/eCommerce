import User from "../db/models/User.js";
import { validationResult } from "express-validator";
import { ObjectId } from "mongodb";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "You must provide username and password" });
  }
  const user = await User.findByCredentials(email, password);
  if (!user) {
    return res.status(400).json({ errors: "Invalid Credentials" });
  }

  const token = await user.getAuthToken();
  res.send({ token, user });
};

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, password, email } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
    });
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({
        errors: [{ msg: "User with the same email address already exists" }],
      });
    }
    // get jwt token
    const token = await user.getAuthToken();
    await user.save();
    return res.status(201).json({ token, user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    const user = req.user;
    return res.json({ user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};
