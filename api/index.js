import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
mongoose
.connect(process.env.MONGO)
.then(
   ()=>{
    console.log("MongoDB connected");
   }
)
.catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log(`Server listening at port ${port}`);
});