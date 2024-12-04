import express from "express";
import { PORT } from "./config/config";
import { connectDb } from "./db/database";
import router from "./routes"
import cors from "cors";

const app=express();
const port=PORT;
app.use(express.json());
app.use(cors())
connectDb();

app.use(router);



app.listen(port,()=>{
    console.log(`running server ${port}`);
})