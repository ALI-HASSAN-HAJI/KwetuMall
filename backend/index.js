import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import classRouter from './routes/classRoutes.js';
import exampleRouter from './routes/exampleRoutes.js';
import calculatorRoutes from './routes/calculatorRoutes.js';
import studentRoutes from './routes/studentRoutes.js'
import userAuth from './routes/userAuth.js';
import playerRoutes from './routes/playerRoutes.js';


const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('uploads')); // exposes this folder so that we can access the images from the frontend
const mongoUrl = 'mongodb+srv://AliHaji:47803105018@cluster0.doscjxn.mongodb.net/?retryWrites=true&w=majority'
                  

mongoose.connect(mongoUrl)
.then(() => console.log("MongoDB is connected......"))
.catch((err) => console.log(err))

app.use('/', classRouter);
app.use('/', exampleRouter);
app.use('/', calculatorRoutes);
app.use('/student', studentRoutes);
app.use('/users', userAuth);
app.use('/player', playerRoutes);

app.listen(PORT, () => {
  console.log("Server listening on PORT: "+PORT)
});