import { Router } from "express";
import { getUser, login, register } from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/authenticate.js";

//create users router
const usersRouter = Router();

//define routes
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.post("/logout", );
usersRouter.get("/me", verifyToken, getUser);

export default usersRouter;
