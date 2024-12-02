import mongoose from "mongoose";

export const connectDb=async():Promise<any>=>{
    try {
        await mongoose.connect(process.env.DB_URI ?? "");
        console.log("database connected");       
    } catch (error) {
        console.log("error in database connection",error);       
    }

}