import { Router } from "express";
import { addBudget, deleteBudget, getBudgets } from "../controllers/budgets.controller.js";
import { verifyToken } from "../middlewares/authenticate.js";



//create budgets router
const budgetsRouter = Router();

budgetsRouter.use(verifyToken);

//define routes
budgetsRouter.post('/', addBudget);
budgetsRouter.get('/', getBudgets);
budgetsRouter.delete('/:id', deleteBudget);


export default budgetsRouter;
