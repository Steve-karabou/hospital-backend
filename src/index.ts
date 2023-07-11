import express from "express";
import mongoose from "mongoose";
import patientRoute from "./routes/patient";
import userRoute from "./routes/user";
import cors from "cors";
import config from "./config";
const app = express();

mongoose.connect(`${config.data_base}`).then(() =>console.log("Mongo Data base connectd successfuly"))
.catch((err)=> console.error(err));

app.use(express.json());
app.use(cors());

//Routes
app.use("/"+config.prefix+"/user", userRoute);

app.use("/"+config.prefix+"/patient", patientRoute);

app.listen(config.port, ()=>console.log(`Server is listening on port ${config.port}`));
