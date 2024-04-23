import { Schema, Types, model } from "mongoose";

const budgetSchema = new Schema({
    userId: { type: Types.ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
});

// Customize toJSON to format the date
budgetSchema.set('toJSON', {
    transform: function (doc, ret) {
        // Convert the date to a string without the time part
        ret.date = ret.date.toISOString().split('T')[0];
        return ret;
    }
});

export const BudgetModel = model('Budget', budgetSchema, 'budgets');
