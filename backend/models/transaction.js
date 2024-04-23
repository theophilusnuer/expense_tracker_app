import { Schema, Types, model } from "mongoose";


const transactionSchema = new Schema({
    userId: {type: Types.ObjectId, required:true},
    title: {type: String, required:true},
    description: {type: String, required:true},
    amount: {type: Number, required:true},
    type: {
        type:String,
        enum: ['income','expense'],
        required:true
    },
    date: {type: Date, required:true},
    category: {
        type:String,
        enum: ['Momo','Bank','Cash','Transport','Food & Groceries','Utilities','Personal & Health'],
        required:true
    },
});

// Customize toJSON to format the date
transactionSchema.set('toJSON', {
    transform: function (doc, ret) {
        // Convert the date to a string without the time part
        ret.date = ret.date.toISOString().split('T')[0];
        return ret;
    }
});

export const TransactionModel = model ('Transaction', transactionSchema, 'transactions');