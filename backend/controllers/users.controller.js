import { UserModel } from "../models/user.js";
import bcrypt from "bcryptjs";


//creating a new user
export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(8);
  try {
    const user = {
      username: req?.body?.username,
      email: req?.body?.email,
      password: bcrypt.hashSync(req?.body?.password, salt),
    };
    await UserModel.create(user);
    res.status(201).json({
      message: "User registered successfully!",
    });
  } catch (error) {
    next(error);
  }
};

//loging in as an existing user
export const login = async (req,res, next) => {
    const { email, password } = req.body;
    try {
        //find user email in database
        const user = await UserModel.findOne({email });
        //return 404 if user is not found
        if (!user){
            return res.status(404).json({ message: "User Not Found."});
        }
        //check if user password entered is correct
        const passwordMatch = bcrypt.compare(password, user.password);
        if (!passwordMatch){
            return res.status(401).json({message: "Invalid Password!"});
        }
        res.status(200).json({message: "Login successful"})
    } catch (error) {
        next(error);
    }
}


//getting a  user

