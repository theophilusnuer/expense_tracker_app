import { Router } from "express";
import { addBudget, deleteBudget, getBudgets } from "../controllers/budgets.controller.js";


//create budgets router
const budgetsRouter = Router();

//define routes
budgetsRouter.post('/', addBudget);
budgetsRouter.get('/', getBudgets);
budgetsRouter.delete('/:id', deleteBudget);


export default budgetsRouter;
