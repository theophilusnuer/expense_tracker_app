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
        enum: ['momo','bank','cash','transport','food & groceries','utilities','personal & health'],
        required:true
    },
});

export const TransactionModel = model ('Transaction', transactionSchema, 'transactions');