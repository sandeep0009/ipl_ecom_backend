import mongoose, { Document,Schema } from "mongoose";


export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    iplTeam:string;
}
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    iplTeam:{
        type:String,
        required:true
    }

},{timestamps:true});

export const User=mongoose.model("User",userSchema);