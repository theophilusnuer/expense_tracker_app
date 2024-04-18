import { Schema, Types, model } from "mongoose";


const budgetSchema = new Schema({
    userId:{type:Types.ObjectId, required:true},
    title: {type:String, required:true},
    description: {type:String, required:true},
    amount: {type:Number, required:true},
    date: {type:Date, required:true},
});


export const BudgetModel = model('Budget', budgetSchema, 'budgets');