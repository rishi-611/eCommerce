import JWT from "jsonwebtoken";
import User from "../db/models/User.js";

//looks for "Authorization" key in req.headers
//the key should exist and should contain a jwt token
//returns authorization error on failure
//passes control to controller with req.user = user on success

const auth = async function (req, res, next) {
  try {
    if (!req.header("Authorization")) {
      console.log("Authorization header missing");
      return res.status(404).json({
        error: "Authorization header missing",
      });
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(404).json({
        error: "user not authorized",
      });
    }
    const decodedToken = await JWT.verify(token, process.env.JWT_SECRET_KEY)
      ._id;
    const user = await User.findOne({
      _id: decodedToken,
      "tokens.token": token,
    });
    if (!user) {
      return res.status(404).json({ errors: [{ msg: "user not authorized" }] });
    }
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    console.log(err.message);
    return res
      .status(err.message === "jwt expired" ? 400 : 500)
      .json({ errors: err.message });
  }
};

export default auth;
