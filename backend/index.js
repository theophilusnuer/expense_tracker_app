import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRouter from "./routes/users.routes.js";
import transactionsRouter from "./routes/transactions.routes.js";
import budgetsRouter from "./routes/budgets.routes.js";


dotenv.config({path: [".env.local"]});

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


//routes
app.use('/osikani/users', usersRouter );
app.use('/osikani/transactions', transactionsRouter);
app.use('/osikani/budgets', budgetsRouter);


//mongoose connection to database
await mongoose.connect(process.env.MONGODB_URL);

//listening port
const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`Osikani Server is running on port ${port}!`);
});