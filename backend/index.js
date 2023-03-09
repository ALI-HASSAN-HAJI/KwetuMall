import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import classRouter from './routes/classRoutes.js';
import exampleRouter from './routes/exampleRoutes.js';
import calculatorRoutes from './routes/calculatorRoutes.js';

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
const mongoUrl = 'mongodb+srv://AliHaji:47803105018@cluster0.doscjxn.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUrl)
.then(() => console.log("MongoDB is connected......"))
.catch((err) => console.log(err))

app.use('/', classRouter);
app.use('/', exampleRouter);
app.use('/', calculatorRoutes)

app.listen(PORT, () => {
  console.log("Server listening on PORT: "+PORT)
});