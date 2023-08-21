import mongoose from "mongoose";
import mongoosePagination from "mongoose-paginate"
import IUser from "../interfaces/user";

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, required: true}
},
{
 timestamps: true
})

userSchema.plugin(mongoosePagination)

const User = mongoose.model<IUser>("User", userSchema);

export default User;