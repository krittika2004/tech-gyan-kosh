import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
dotenv.config();
const app = express();
const port = 3000;

const uri= "mongodb+srv://krittikajari:krittika@techgyaan.hx8pfqy.mongodb.net/techGyaan?retryWrites=true&w=majority&appName=techGyaan";
//console.log('MongoDB connection string:',uri);

mongoose
  .connect(uri)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });
  
app.use(express.urlencoded({ extended: true }));
//test route
app.use(express.json());

app.get('/test',(req,res)=>{
    res.json({message: 'Api is working'});
})

app.use('/api/auth', authRoutes);

app.listen(3000, ()=>{
    console.log(`Server listening at port ${port}`);
});