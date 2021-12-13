import User from "../db/models/User.js";
import auth from "../middlewares/auth.js";
import { validationResult } from "express-validator";

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
  await user.save();
  res.send({ token });
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
    return res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: [{ msg: "Server error" }] });
  }
};
