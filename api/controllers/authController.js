import { createError } from "../lib/createError.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";





//login
export const login = async (req, res, next) => {
  try {
    const exist = await User.findOne({ email: req.body.email });

    if (!exist) return next(createError(404, "user does not exist"));

    const isValid = bcrypt.compareSync(req.body.password, exist.password);
    if (!isValid) return next(createError(401, "credintials are not valid"));

    const token = jwt.sign(
      { id: exist._id, name: exist.username, email: exist.email },
      process.env.JWT_SECRET
    );
    const { password, ...other } = exist._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(201)
      .json(other);
  } catch (error) {
    next(error);
  }
};






//register
export const register = async (req, res, next) => {
  const exist = await User.findOne({ email: req.body.email });
  if (exist) {
    return next(createError(404, "user exists already"));
  }

  const { username, email, password, img } = req.body;
  if (!username || !email || !password) {
    return next(createError(404, "you must fill all fields"));
  }

  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const user = await User.create({
      ...req.body,
      password: hash,
    });

    const token = jwt.sign(
      { id: user._id, name: user.username, email: user.email },
      process.env.JWT_SECRET
    );

    const { password, ...other } = user._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(201)
      .json(other);
  } catch (error) {
    next(error);
  }
};






//logout
export const logout = async (req, res, next) => {
  res
    .clearCookie("accessToken", { sameSite: "none", secure: true })
    .status(200)
    .send("user logged out");
};
