import User from "../db/models/User.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

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

export const editUser = async (req, res) => {
  //expecting name or/and (current + new password) in body

  //if only name, update name and save,
  //if only pass, verify current pass, then update pass,
  // if both, then do both processes

  try {
    const user = req.user;
    const { name, currPass, newPass } = req.body;

    if (!name && !newPass) throw new Error("Request body empty");

    if (newPass && !currPass) {
      //error will be handled in errorhandler middleware
      throw new Error(
        "Current password field is empty. You must verify that it's you!"
      );
    }

    if (newPass && currPass) {
      //first verify if currPass is correct
      const isPasswordCorrect = await bcrypt.compare(currPass, user.password);
      if (!isPasswordCorrect) {
        throw new Error("Current Password incorrect! You must verify its you!");
      }

      if (newPass.length < 6)
        throw new Error("Password must be atleast 6 characters long");

      user.password = newPass;
    }

    if (name) {
      user.name = name;
    }

    await user.save();

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};
