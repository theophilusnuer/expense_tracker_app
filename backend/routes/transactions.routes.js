import { Router } from "express";
import { addTransaction, deleteTransaction, getTransactions } from "../controllers/transactions.controller.js";



//create transactions router
const transactionsRouter = Router();

//define routes
transactionsRouter.post('/', addTransaction);
transactionsRouter.get('/', getTransactions);
transactionsRouter.delete('/:id', deleteTransaction);


export default transactionsRouter;