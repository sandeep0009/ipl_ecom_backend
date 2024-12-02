import express from "express";
import { PORT } from "./config/config";
import { connectDb } from "./db/database";
import router from "./routes"

const app=express();
const port=PORT;
app.use(express.json());

connectDb();

app.use(router);



app.listen(port,()=>{
    console.log(`running server ${port}`);
})