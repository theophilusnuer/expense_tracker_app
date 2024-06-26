import { Schema, model } from "mongoose";


const userSchema = new Schema({
    email: {type:String, required:true, unique:String},
    username: {type:String, required:true, unique:String},
    password: {type:String, required:true},
});

export const UserModel = model ('user', userSchema, 'users');
