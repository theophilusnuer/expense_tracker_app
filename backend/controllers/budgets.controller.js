import { BudgetModel } from "../models/budget.js";

export const addBudget = async (req, res, next) => {
  try {
    const results = await BudgetModel.create(req.body);
    res.status(201).json(results);
  } catch (error) {
    next(error);
  }
};

export const getBudgets = async (req, res, next) => {
  try {
    const results = await BudgetModel.find(req.query);
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export const deleteBudget = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await BudgetModel.findByIdAndDelete({_id: id});
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};
