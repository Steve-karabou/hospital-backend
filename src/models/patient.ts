import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let patientSchema = new mongoose.Schema({
    lastName: {type:String, required: true},
    firstName: {type: String, required: true},
    age: {type: Number, required: true},
    sex: {type: String, required: true},
    mobile: {type: Number, required: true},
    email: {type: Number, required: true}

},
{
    timestamps: true
 });

 patientSchema.plugin(mongoosePaginate);

 const Patient = mongoose.model("Patient", patientSchema);
 export default Patient;
