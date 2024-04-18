import { Router } from "express";
import { login, register } from "../controllers/users.controller.js";


//create users router
const usersRouter = Router();

//define routes
usersRouter.post('/register', register);
usersRouter.post('/login', login);
usersRouter.post('/logout',);
usersRouter.get('/me',);


export default usersRouter;