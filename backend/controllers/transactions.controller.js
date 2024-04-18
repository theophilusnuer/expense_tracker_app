import { TransactionModel } from "../models/transaction.js";


export const addTransaction = async (req, res, next) => {
    try {
        const results = await TransactionModel.create(req.body);
        res.status(201).json(results);
    } catch (error) {
        next(error);
    }
};

export const getTransactions = async (req,res, next) => {
    try {
        const results = await TransactionModel.find({});
        res.status(200).json(results);
    } catch (error) {
        next(error)
    }
};

export const deleteTransaction = async (req,res,next) => {
    const {id} = req.params
    try {
        const results = await TransactionModel.findByIdAndDelete(id);
    res.status(200).json(results);
    } catch (error) {
        next(error)
    }
};