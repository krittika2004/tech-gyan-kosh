import express from "express";
import mongoose from "mongoose";
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

//Mongo DB connection
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

//middlewares 

app.use(express.urlencoded({ extended: true }));
//test route
app.use(express.json());
app.use(cors());
app.get('/test',(req,res)=>{
    res.json({message: 'Api is working'});
})

app.use('/api/auth', authRoutes);


//middleware to send error messages

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message,
        }
    );

}
);

app.listen(3000, ()=>{
    console.log(`Server listening at port ${port}`);
});