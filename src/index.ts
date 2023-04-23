import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/BIBLIO').then(() =>console.log("Mongo Data base connectd successfuly"))
.catch((err)=> console.error(err));

app.use(express.json());
app.use(cors());

//Routes
// app.use("/api/patient", patientRoute);

app.listen(8085, ()=>console.log("Serve started"));
