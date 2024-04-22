import { UserModel } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TokenModel } from "../models/token.js";

//creating a new user
export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(8);
  try {
    const user = {
      username: req?.body?.username,
      email: req?.body?.email,
      password: bcrypt.hashSync(req?.body?.password, salt),
    };
    const userExist = await UserModel.findOne({ email: req?.body?.email });
    if (userExist) {
      return res.status(409).json({ message: "User already exist" });
    }
    await UserModel.create(user);
    res.status(201).json({
      message: "User registered successfully!",
    });
  } catch (error) {
    next(error);
  }
};

//loging in as an existing user
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //find user email in database
    const user = await UserModel.findOne({ email });
    //return 404 if user is not found
    if (!user) {
      return res.status(404).json({ message: "User Not Found." });
    }
    //check if user password entered is correct
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid Password!" });
    }
    // Generate access token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    //save users token
    await TokenModel.create({ userId: user._id });
    // Return response
    res.status(200).json({ message: "Login successful", accessToken: token });
  } catch (error) {
    next(error);
  }
};

//getting a  user
export const getUser = async (req, res, next) => {
  try {
    const singleUser = await UserModel.findById(req.user.id);
    res.status(201).json({
      id: singleUser._id,
      email: singleUser.email,
      username: singleUser.username,
    });
  } catch (error) {
    next(error);
  }
};

// logging out a user
export const logout = async (req, res, next) => {
  //deactivate user token
  try {
    await TokenModel.updateMany({ userId: req.user._id }, { active: false });
    res.status(200).json({ message: "Log out successful!" });
  } catch (error) {
    next(error);
  }
};
