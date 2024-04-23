import { Router } from "express";
import { addTransaction, deleteTransaction, getTransactions } from "../controllers/transactions.controller.js";
import { verifyToken } from "../middlewares/authenticate.js";



//create transactions router
const transactionsRouter = Router();

transactionsRouter.use(verifyToken);

//define routes
transactionsRouter.post('/', addTransaction);
transactionsRouter.get('/', getTransactions);
transactionsRouter.delete('/:id', deleteTransaction);


export default transactionsRouter;