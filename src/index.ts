import express from "express";
import mongoose from "mongoose";
import patientRoute from "./routes/patient";
import cors from "cors";
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/CLINIC').then(() =>console.log("Mongo Data base connectd successfuly"))
.catch((err)=> console.error(err));

app.use(express.json());
app.use(cors());

//Routes
app.use("/api/patient", patientRoute);

app.listen(5000, ()=>console.log("Serve started"));
