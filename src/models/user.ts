import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let userSchema = new mongoose.Schema({
    userName: {type:String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: String, require: true},
    password: {type: String, require: true},
    role: {type: String, require: true}
},
{
    timestamps: true
 });

 userSchema.plugin(mongoosePaginate);

 const User = mongoose.model("User", userSchema);
 export default User;
